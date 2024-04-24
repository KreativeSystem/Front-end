import React from "react"
import Login from "../login"

export const recoverPass = ()=>{
    return(
        <body>
            <div>       
            <div className="formulario_senha"> 
                <img src="/img/boot.png" alt=""></img>

                <div className="login_senha">
                    <form >
                        <h1>Redefinir a senha</h1>
                        <h2>Coloque seu e-mail</h2>
                        <input className="form-control" type="text" name="email" placeholder="Digite seu e-mail" /><br />
                        <button class="form-floating" type="submit">ENVIAR</button>
                    </form>
                </div>
            </div>
        </div> 
    </body>
    )
}

export default Login