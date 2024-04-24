import React from "react"
import Login from "../login"

export const AddUser = ()=>{
    return(
    <body>
        <div>       
            <div className="forms"> 
                <img src="/img/boot.png" alt=""></img>

                <div className="login">
                    <form >
                        <h1>Faça o cadastro</h1>
                        <h2>Nome</h2>
                        <input className="form-control" type="text" name="email" placeholder="Digite seu nome" /><br />
                        <h2>Email</h2>
                        <input className="form-control" type="text" name="email" placeholder="Digite seu e-mail" /><br />
                        <h2>Senha</h2>
                        <input className="form-control" type="password" name="password" placeholder="Crie sua senha"  /> <br />
                        <button class="form-floating" type="submit" href="/dashboard">CRIAR</button>
                    </form>
                </div>
            </div>
        </div> 
    </body>
    )
}

export default Login