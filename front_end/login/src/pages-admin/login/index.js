import React, { useState, useContext } from "react";
import api from "../../config/configApi";
import { useNavigate } from "react-router-dom";

import { Context } from "../../Context/AuthContext";

export const Login = () => {
    const { signIn, authenticated } = useContext(Context);
    const navigate = useNavigate();
    const [user, setUser] = useState({ email: '', password: '' });
    const [status, setStatus] = useState({ type: '', mensagem: '', loading: false });
    const [showPassword, setShowPassword] = useState(false);

    console.log("Na tela de login o usuário está " + authenticated);

    const loginSubmit = async e => {
        e.preventDefault();
        setStatus({ ...status, loading: true });

        const headers = { 'Content-Type': 'application/json' };

        try {
            const response = await api.post('/users-login', user, { headers });
            console.log(response);
            if (response.status === 200) {
                setStatus({
                    type: 'success',
                    mensagem: response.data.mensagem,
                    loading: false
                });
                localStorage.setItem('token', (response.data.token));
                const emailDomain = user.email.split('@')[1];
                navigate(emailDomain === 'kreative.com' ? '/dashboard' : '/lista');
                signIn(); // Autenticar usuário após o login
            } else {
                setStatus({
                    type: 'error',
                    mensagem: "Erro ao fazer login",
                    loading: false
                });
            }
        } catch (error) {
            if (error.response) {
                setStatus({
                    type: 'error',
                    mensagem: error.response.data.mensagem,
                    loading: false
                });
            } else {
                setStatus({
                    type: 'error',
                    mensagem: "Erro de conexão com o servidor",
                    loading: false
                });
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleInputChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="row border bg-white shadow box-area">
                    <div className="col-md-6 d-flex justify-content-center align-items-center flex-column left-box img-login">
                        <div className="featured-image mb-3">
                            <img src="./img/logo-l.png" className="img-fluid" alt="Logo" />
                        </div>
                    </div>
                    <div className="col-md-6 right-box">
                        <div className="row align-items-center">
                            <div className="header-text mb-4">
                                <h2>Faça o Login</h2>
                            </div>
                            <form onSubmit={loginSubmit}>
                                <div className="input-box-l">
                                    <div className="input-field">
                                        <input type="email" className="input" id="email" required name="email" onChange={handleInputChange} />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="input-field">
                                        <input type={showPassword ? "text" : "password"} className="input" id="pass" required name="password" onChange={handleInputChange} />
                                        <label htmlFor="pass">Senha</label>
                                    </div>
                                </div>
                                <div className="input-group mb-5 d-flex justify-content-between">
                                    <div className="forgot">
                                        <small><a href="/recoverPass">Esqueci a senha</a></small>
                                    </div>
                                </div>
                                <p className={status.type === 'success' ? "success" : "error"}>{status.mensagem}</p>
                                {status.loading ? <p className="aguarde">Aguarde...</p> : ''}
                                <button disabled={status.loading} className="btn btn-dark btn-lg w-100 fs-6" type="submit">ENTRAR</button>
                            </form>
                            <div className="input-group mb-3">
                                <button className="btn btn-lg btn-light w-100 fs-6 cadastra-login"><a href="/addUser">Cadastre-se</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
