import React from "react";
import Navbar from "../header";

export const Alerta = () => {

    return (
        <div>
            <Navbar/>
    <section>
        <div class="container overflow-hidden ">
            <div class="row gx-5">
            <div class="col">
            <div class="p-3  ">Alerta</div>
            </div>
            <div class="col text-end">
                <div class="p-3"><button type="button" class="btn cadastrar-formulario">Listar</button></div>
            </div>
            </div>
        </div>
        <div class="alerta">
            <div class="alert alert-primary" role="alert" >
                A simple primary alert—check it out!
            </div>
            <div class="alert alert-secondary" role="alert">
                A simple secondary alert—check it out!
            </div>
            <div class="alert alert-success" role="alert">
                A simple success alert—check it out!
            </div>
            <div class="alert alert-danger" role="alert">
                A simple danger alert—check it out!
            </div>
            <div class="alert alert-warning" role="alert">
                A simple warning alert—check it out!
            </div>
            <div class="alert alert-info" role="alert">
                A simple info alert—check it out!
            </div>
        </div>
    </section>
            

        </div>
    )
}
export default Alerta