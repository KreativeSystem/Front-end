import React, {useState} from "react";
import api from "../../config/configApi"
import{useNavigate} from "react-router-dom"
import Navbar from "../header";




export const Formulario = () => {

    const navigate = useNavigate();
 
    const [data, setData] = useState({
        name: '',
        email:'',
        password: '',
        phone: '',
        CEP: '',
        state: '',
        city: '',
        street: '',
        dwellingNumber: ''
        
    })

    const [mensagem, setMensagem] = useState("")

    const valorInput = e => setData({...data, [e.target.name]: e.target.value})

    const sendForms = async (e) =>{

        e.preventDefault();

        const headers = { 
            'Content-Type' : 'application/json'
        }

        await api.post('/users', data, {headers})
        .then((response)=>{
        setMensagem(response.data.mensagem)
        return navigate('/listar')

        }).catch((error)=>{
            setMensagem(error.response.data.mensagem)
        })
    }
    const consultarCEP = async (CEP) => {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);
            if (!response.ok) {
                throw new Error("Erro ao consultar CEP");
            }
            const dataCEP = await response.json();
            setData({
                ...data,
                state: dataCEP.uf,
                city: dataCEP.localidade,
                street: dataCEP.logradouro,
            });
        } catch (error) {
            console.error("Erro ao consultar CEP:", error);
        }
    };
   

    return (
        <div>
            <Navbar/>
            <section class="section-tamanho">
                <div class="container overflow-hidden cor-linha">
                    <div class="row gx-5">
                        <div class="col">
                            <div class="p-3 ">Cadastrar</div>
                        </div>
                       
                    </div>
                </div>
                <div class="margem-forms">
                    <form class="row g-3" onSubmit={sendForms}>
                        <div class="col-md-6">
                            <label  class="form-label">Nome</label>
                            <input type="text" class="form-control" id="inputCity" placeholder="Nome completo" name="name"  onChange={valorInput} required/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="Coloque o e-mail" name="email" onChange={valorInput} required />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">Senha</label>
                            <input type="password" name="password" class="form-control" id="inputCity" placeholder="Até 5 caracteres" onChange={valorInput} required/>
                        </div>
                        <div class="col-md-6">
                            <label  class="form-label">telefone</label>
                            <input  type="number" class="form-control" id="inputCity" placeholder="(xx) xxxxx-xxxx" name="phone" pattern="^\(\d" onChange={valorInput} required/>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">CEP</label>
                            <input type="number" class="form-control" id="inputAddress" placeholder="Coloque seu CEP" name="CEP" pattern="[0-9]+$" onBlur={(e) => consultarCEP(e.target.value)} onChange={valorInput} required />
                        </div>
                        <div class="col-md-6">
                            <label  class="form-label">Estado</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="Coloque seu estado" name="state" value={data.state}  onChange={valorInput}  required/>
                        </div>
                        <div class="col-md-6">
                            <label  class="form-label">Cidade</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="Coloque sua cidade" name="city" value={data.city}  onChange={valorInput} required />
                        </div>
                        <div class="col-md-6">
                            <label  class="form-label">Rua</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="Coloque sua rua" name="street" value={data.street} onChange={valorInput} required />
                        </div>
                        <div class="col-md-6">
                            <label for="inputAddress" class="form-label">Numero de moradia</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="Coloque o numero de moradia" name="dwellingNumber" onChange={valorInput} required />
                        </div>
                        <br></br>
                        {mensagem ? <p>{mensagem}</p>: ""}
                        <button type="submit" class="btn cadastrar-formulario">Cadastrar</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default Formulario