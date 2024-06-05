import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Context/AuthContext";
import api from "../../config/configApi"
import { useNavigate } from "react-router-dom"

export const Perfil = () => {

    const navigate = useNavigate();

    function navigateCarrinho() {
        navigate('/carrinho-compras');
    }
    function navigatePerfil() {
        navigate('/perfil');
    }
    const { authenticated, handleLogout } = useContext(Context);

    const token = localStorage.getItem('token');


    return (
        <div className="body">
            {/* HEADER */}
            <nav class="navbar navbar-expand-lg fixed-top header-2">
                <div class="container-fluid">

                    <img src="./img/logo-preta.png" alt="Logo" class="d-inline-block align-text-top me-auto img-logo" />


                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img src="./img/logo-preta.png" alt="" class="img-logo" /></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav flex-grow-1 pe-3">

                                <li class="nav-item">
                                    <a class="nav-link topicos-2 mx-lg-2" href="#">Sobre Nós</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link topicos-2 mx-lg-2" href="#">Produtos</a>
                                </li>
                            </ul>



                        </div>
                    </div>
                    <div className="icones">
                    <a href="#" onClick={navigateCarrinho}><img src="/img/cart.png" /></a>
                        <a href="#" onClick={navigatePerfil}><img src="/img/user.png" /></a>
                        <a onClick={handleLogout}><img src="../img/sair.png"></img> </a>
                    </div>

                    <button class="navbar-toggler sanduba" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            {/* FIM DO HEADER */}

            <body className="body-perfil">
            <header><h1 className="title-perfil">Seu perfil</h1></header>
            <section className="section-position-perfil">
                
                <a className="navbar-brand" href="#">
                    <img className="img-perfil" src="/img/default-img.png" alt="" width="300" height="300" />
                </a>

                <ul className="list-group list-group-flush itens-perfil">
                    <li className="list-group-item"><h4>Nome</h4>nome</li>
                    <li className="list-group-item"><h4>Email</h4>Email</li>
                    <li className="list-group-item"><h4>Telefone</h4>Telefone</li>
                    <li className="list-group-item"><h4>Endereço</h4>Endereço</li>
                    <button type="button" className="btn btn-danger botao-logout">Sair</button>
                </ul>
                
            </section>
        </body>

        </div>

    )
}
export default Perfil