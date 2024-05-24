
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import api from "../../config/configApi.js";
import 'bootstrap/dist/css/bootstrap.min.css';

export const RecoverPass = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const isEmailValid = email.trim() !== '';
    const isFormValid = newPassword !== '' && confirmNewPassword !== '';
    const isPasswordValid = newPassword.length >= 5;

    const handlePasswordReset = async (e) => {
        e.preventDefault();

        // Verificando se a senha tem mais de 5 caracteres
        if (newPassword.length < 5) {
            setError("A senha deve ter pelo menos 5 caracteres");
            return;
        }

        // Verificando se as senhas coincidem
        if (newPassword !== confirmNewPassword) {
            setError("As senhas não coincidem");
            return;
        }

        // Verificando se o email é válido (pode ser implementada uma validação mais robusta)
        if (!isEmailValid) {
            setError("O email não é válido");
            return;
        }

        setIsLoading(true);
        setFormSubmitted(true);

        try {
            const response = await api.post('/password-change', { email, newPassword });

            if (response.data.error) {
                setError(response.data.message);
            } else {
                setError("Senha alterada com sucesso");
            }
        } catch (error) {
            setError("Erro ao tentar redefinir a senha. Tente novamente mais tarde.");
        }

        setIsLoading(false);
    };


    return (
        <div>
            {/*----------------------- container --------------------------*/}
            <div class="container d-flex justify-content-center align-items-center min-vh-100">
                {/*----------------------- caixa Login--------------------------*/}
                <div class="row border  bg-white shadow box-area">
                    {/*--------------------------- imagem lateral ----------------------------->*/}
                    <div class="col-md-6  d-flex justify-content-center align-items-center flex-column left-box img-login">
                        <div class="featured-image mb-3">
                            <img src="./img/logo-l.png" class="img-fluid" />
                        </div>
                    </div>
                    {/*-------------------- ------ input direito----------------------------*/}

                    <div class="col-md-6 right-box">
                        <div class="row align-items-center">
                            <div class="header-text mb-4">
                                <h2>Redefinir senha</h2>

                            </div>
                            <form onSubmit={handlePasswordReset}>
                                {error && <p className="text-danger text-center">{error}</p>}
                                <div class="input-box-l">
                                    <div class="input-field">
                                        <input type="text" class="input" id="email" required autocomplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <label for="email">Email</label>
                                    </div>
                                    <div class="input-field">
                                        <input type="password" class="input" id="pass" required value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                        <label for="pass">senha</label>
                                    </div>
                                    <div class="input-field">
                                        <input type="password" class="input" id="pass" required value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
                                        <label for="pass">Confirme sua senha</label>
                                    </div>
                                </div>
                                <div class="grupo-l">
                                    <div class="input-group mb-3 entrar ">
                                        <button type="submit" className={`btn btn-lg w-100 fs-6 btn-block ${isLoading || (!isEmailValid && !isFormValid) ? 'disabled' : ''}`} disabled={isLoading || (!isEmailValid && !isFormValid)}>Redefinir</button>
                                    </div>
                                </div>
                            </form>
                            {formSubmitted && (
                                <div class="row">
                                    <Link to="/">Voltar para o login</Link>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default RecoverPass