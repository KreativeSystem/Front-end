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
                return navigate('/')

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

            <div class="container d-flex justify-content-center align-items-center min-vh-100">

                <div class="row border  bg-white shadow box-area">

                    <div
                        class="col-md-6  d-flex justify-content-center align-items-center flex-column left-box img-login">
                        <div class="featured-image mb-3">
                            <img src="./img/logo-l.png" class="img-fluid" />
                        </div>
                    </div>


                    <div class="col-md-6 right-box">
                        <div class="row align-items-center">
                            <div class="header-text mb-4">
                                <h2>Cadastre-se</h2>

                            </div>


                            <form onSubmit={sendForms}>
                                <div className="input-box-c">
                                    <div className="separacao">
                                        <div class="input-field">
                                            <input id="firstname" type="text" name="name" class="input" required onChange={valorInput} />
                                            <label for="firstname">Nome</label>
                                        </div>

                                        <div class="input-field">

                                            <input id="email" type="email" name="email" class="input" required onChange={valorInput} />
                                            <label for="email">E-mail</label>
                                        </div>
                                        <div class="input-field">

                                            <input id="password" type="password" name="password" class="input" required onChange={valorInput} />
                                            <label for="password">Senha</label>
                                        </div>

                                        <div class="input-field">

                                            <input id="number" type="tel" name="phone" class="input" required onChange={valorInput} />
                                            <label for="number">Celular</label>
                                        </div>


                                        <div class="input-field">

                                            <input  type="text" name="CEP" class="input" required onBlur={(e) => consultarCEP(e.target.value)} onChange={valorInput} />
                                            <label for="password">CEP</label>
                                        </div>
                                    </div>
                                    <div className="separacao">
                                        <div class="input-field">

                                            <input  type="text" name="state" class="input" required value={data.state} onChange={valorInput} />
                                            <label for="password">Estado</label>
                                        </div>
                                        <div class="input-field">

                                            <input  type="text" name="city" class="input" required value={data.city} onChange={valorInput} />
                                            <label for="password">Cidade</label>
                                        </div>
                                        <div class="input-field">

                                            <input  type="text" name="street" class="input" required value={data.street} onChange={valorInput} />
                                            <label for="password">Rua</label>
                                        </div>
                                        <div class="input-field">

                                            <input  type="text" name="dwellingNumber" class="input" required onChange={valorInput} />
                                            <label for="password">Numero da moradia</label>
                                        </div>
                                    </div>
                                </div>

                                {mensagem ? <p>{mensagem}</p>: ""}

                        
                                    <button class="btn btn-dark btn-lg w-100 fs-6" type="submit">Cadastrar</button>
                            
                            </form>
                            
                            <div class="row">
                                <small>Já tem uma conta? <a href="/">Entrar</a></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
export default AddUser