import React, { useState } from "react";
import api from "../../config/configApi"
import { useNavigate } from 'react-router-dom'


export const Login = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''

    })

    const [status, setStatus] = useState({
        type: '',
        mensagem: '',
        loding: false
    })



    const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value })

    const loginSubmit = async e => {
        e.preventDefault();
        //console.log(user.email)
        //console.log(user.password)

        setStatus({loding:true})

        const headers = {
            'Content-Type': 'application/json'
        }

        await api.post('/user-login', user, { headers })
            .then((response) => {
                setStatus({
                    type: 'success',
                    mensagem: response.data.mensagem,
                    loding:false
                })
                return navigate('/dashboard')

            }).catch((error) => {
                if (error.response) {
                    setStatus({
                        type: 'error',
                        mensagem: error.response.data.mensagem
                    })
                } else {
                    setStatus({
                        type: 'error',
                        mensagem: "Erro de conexão tente novamente mais tarde"
                    })
                }
            })
    }

    return (
    <body>
        <div>       
            <div className="forms"> 
                <img src="/img/logo.png" alt=""></img>

                <div className="login">
                    <form onSubmit={loginSubmit}>
                        <h1>Faça login da sua conta</h1>
                        <h2>Email</h2>
                        <input className="form-control" type="text" name="email" placeholder="Digite seu e-mail..." onChange={valueInput} /><br />
                        <h2>Senha</h2>
                        <input className="form-control" type="password" name="password" placeholder="Digite sua senha..." onChange={valueInput} /> <br />
                        <a href="/redefinir_senha" className="link"><strong>ESQUECI MINHA SENHA</strong></a>
                        {status.type === 'success' ? <p className="errado">{status.mensagem}</p> : <p className="errado">{status.mensagem}</p>}
                        {status.loding === true? <p className="aguarde">Aguarde...</p>:''}
                        {status.loding === true? <button disabled={true} class="form-floating" type="submit">ENTRAR</button>:<button disabled={false} class="form-floating" type="submit">ENTRAR</button>}
                        
                    </form>
                </div>

                <div className="cadastrar">
                    <a href="/cadastro">CADASTRAR-SE</a> 
               </div>

            </div>
        </div> 
    </body>
    )
}

export default Login