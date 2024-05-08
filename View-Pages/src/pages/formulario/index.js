import React, {useState, useEffect} from "react";
import api from "../../config/configApi"
import{useNavigate} from "react-router-dom"
import Navbar from "../header/index";

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
    const [formCompleto, setFormCompleto] = useState(false);

    const valorInput = e => setData({...data, [e.target.name]: e.target.value})

    const sendForms = async (e) =>{

        e.preventDefault();

        const headers = { 
            'Content-Type' : 'application/json'
        }

        await api.post('/users', data, {headers})
        .then((response)=>{
        setMensagem(response.data.mensagem)
        return navigate('/lista')

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
    useEffect(() => {
        const { name, email, password, phone, CEP, state, city, street, dwellingNumber } = data;
        if (name && email && password && phone && CEP && state && city && street && dwellingNumber) {
            setFormCompleto(true);
        } else {
            setFormCompleto(false);
        }
    }, [data]);

    return (
        <div>

            <Navbar />

            <section className="section-tamanho">
                <div className="container overflow-hidden cor-linha">
                    <div className="row gx-5">
                        <div className="col">
                            <div className="p-3 ">Cadastrar</div>
                        </div>
                        <div className="col text-end">
                            <div className="p-3"><button type="button" className="btn btn-info">Listar</button></div>
                        </div>
                    </div>
                </div>
                <div className="margem-forms">
                    <form className="row g-3 form-formulario" onSubmit={sendForms}>
                        <div className="col-md-6">
                            <label  className="form-label">Nome</label>
                            <input type="text" className="form-control" id="inputCity" placeholder="Nome completo" name="name"  onChange={valorInput}/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Coloque o e-mail" name="email" onChange={valorInput} />
                        </div>
                        <div className="col-md-6">
                            <label for="inputCity" className="form-label">password</label>
                            <input type="password" name="password" className="form-control" id="inputCity" placeholder="senha" onChange={valorInput} />
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">telefone</label>
                            <input type="text" className="form-control" id="inputCity" placeholder="Campo 4" name="phone" onChange={valorInput} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">cep</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Campo 5" name="CEP" onBlur={(e) => consultarCEP(e.target.value)} onChange={valorInput} />
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">Estado</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Campo 5" name="state" value={data.state}  onChange={valorInput} />
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">cidade</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Campo 5" name="city" value={data.city}  onChange={valorInput} />
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">Rua</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Campo 5" name="street" value={data.street} onChange={valorInput} />
                        </div>
                        <div className="col-md-6">
                            <label for="inputAddress" className="form-label">Numero de moradia</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Campo 5" name="dwellingNumber" onChange={valorInput} />
                        </div>
                        <br></br>
                        {mensagem ? <p>{mensagem}</p>: ""}
                        <button type="submit" className="btn btn-success" disabled={!formCompleto}>Cadastrar</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Formulario
