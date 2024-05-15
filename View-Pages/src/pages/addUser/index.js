import React, { useState, useEffect } from "react";
import api from "../../config/configApi"
import { useNavigate } from "react-router-dom"

export const AddUser = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        name: '',
        email: '',
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

    const valorInput = e => setData({ ...data, [e.target.name]: e.target.value })

    const sendForms = async (e) => {

        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        }

        await api.post('/users', data, { headers })
            .then((response) => {
                setMensagem(response.data.mensagem)
                return navigate('/lista')

            }).catch((error) => {
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
            <section className="addUser">
                <div className="container overflow-hidden cor-linha">
                    <div className="row gx-5">
                        <div className="col">
                            <div className="p-3 title">Cadastrar</div>
                        </div>
                    </div>
                </div>
                <div className="margem-forms">
                    <form className="row g-3 form-formulario" onSubmit={sendForms}>
                        <div className="col-md-6">
                            <label className="form-label">Nome</label>
                            <input type="text" className="form-control input-addUser" id="inputCity" placeholder="Nome completo" name="name" onChange={valorInput} />
                        </div>
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control input-addUser" id="inputEmail4" placeholder="Coloque o e-mail" name="email" onChange={valorInput} />
                        </div>
                        <div className="col-md-6">
                            <label for="inputCity" className="form-label">password</label>
                            <input type="password" name="password" className="form-control input-addUser" id="inputCity" placeholder="senha" onChange={valorInput}></input>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">telefone</label>
                            <input type="text" className="form-control input-addUser" id="inputCity" placeholder="Campo 4" name="phone" onChange={valorInput} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">cep</label>
                            <input type="text" className="form-control input-addUser" id="inputAddress" placeholder="Campo 5" name="CEP" onBlur={(e) => consultarCEP(e.target.value)} onChange={valorInput} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Estado</label>
                            <input type="text" className="form-control input-addUser" id="inputAddress" placeholder="Campo 5" name="state" value={data.state} onChange={valorInput} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">cidade</label>
                            <input type="text" className="form-control input-addUser" id="inputAddress" placeholder="Campo 5" name="city" value={data.city} onChange={valorInput} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Rua</label>
                            <input type="text" className="form-control input-addUser" id="inputAddress" placeholder="Campo 5" name="street" value={data.street} onChange={valorInput} />
                        </div>
                        <div className="col-md-6">
                            <label for="inputAddress" className="form-label">Numero de moradia</label>
                            <input type="text" className="form-control input-addUser" id="inputAddress" placeholder="Campo 5" name="dwellingNumber" onChange={valorInput} />
                        </div>
                        <br></br>
                        {!formCompleto ? <p>preencha todos os campos<br/> para liberar o botão</p> : ""}
                        <div className="Footer">
                            <button type="submit" className="btn" disabled={!formCompleto}>Cadastrar</button>
                            <button type="submit" className="btn"><a href="/">Voltar</a></button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddUser