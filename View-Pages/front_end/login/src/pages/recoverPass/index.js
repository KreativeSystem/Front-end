
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

    const handleRecoverPassword = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setFormSubmitted(true);

        try {
            const response = await api.post('/recover-password', { email });

            if (response.data.error && response.data.message === "Email não encontrado") {
                setError(response.data.message);
            } else {
                setError('');
                setNewPassword('');
                setConfirmNewPassword('');
            }
        } catch (error) {
            setError("Erro ao tentar recuperar a senha. Tente novamente mais tarde.");
        }

        setIsLoading(false);
    };

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setFormSubmitted(true);

        if (newPassword !== confirmNewPassword) {
            setError("As senhas não coincidem");
            setIsLoading(false);
            return;
        }

        if (!isPasswordValid) {
            setError("A nova senha deve ter no mínimo 5 caracteres");
            setIsLoading(false);
            return;
        }

        try {
            const response = await api.post('/password-change', { email, newPassword });

            if (response.data.error) {
                setError(response.data.message);
            } else {
                setError("");
                // Você pode adicionar aqui a lógica para redirecionar para a próxima tela
            }
        } catch (error) {
            setError("Erro ao tentar redefinir a senha. Tente novamente mais tarde.");
        }

        setIsLoading(false);
    };

    return (
        <div>

<div className="forms"> 
                <img src="/img/logo.png" alt=""></img>

                <div className="login">
                    <form onSubmit={formSubmitted ? handlePasswordReset : handleRecoverPassword}>
                    
                        <h1>Recupere sua senha</h1>
                        <h2>Email</h2>
                        <input className="form-control" type="text" name="email" placeholder="Digite seu e-mail..." value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                        <h2>Senha</h2>
                        <input className="form-control" type="password" name="password"  placeholder="Nova senha" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} /> <br />
                        <input type="password" className="form-control" name="confirmNewPassword" placeholder="Confirme a Nova senha" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
                        
                        {error && <p className=" text-center">{error}</p>}
                        {formSubmitted && (
                                <div className="mt-3 text-center">
                                    <Link to="/" className="text-danger">Voltar ao login</Link>
                                </div>
                            )}
                        <button type="submit" className={`btn btn-lg btn-block botao-senha ${isLoading || (!isEmailValid && !isFormValid) ? 'disabled' : ''}`} disabled={isLoading || (!isEmailValid && !isFormValid)}>
                                {isLoading ? "Enviando..." : formSubmitted ? "Redefinir Senha" : "Recuperar Senha"}
                            </button>
                           
                        
                    </form>
                </div>

            </div>


        </div>
    )
}
export default RecoverPass