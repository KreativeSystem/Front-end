import React, { useState, useEffect, useContext} from "react";
import { Context } from '../../Context/AuthContext';
import api from "../../config/configApi"
import { useNavigate } from "react-router-dom"

export const Leite = () => {

    
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

            <div className="row descrição">
                <div className="img-talento">
                    <img src="/img/doce_de_leite.png" className="img" />
                </div>

                <div className="circle-leite">
                    <div className="products-details">
                        <h1 className="product-name">Talento de Dode de Leite - 85g</h1>
                        <h2 className="product-price">R$ 20,00</h2>
                        <p className="short-description">Uma deliciosa barra de chocolate ao leite recheada com um cremoso e irresistível doce de leite.</p>
                        <div className="btn-container">
                            <button className="btn btn-shop"><img src="./img/cart.svg"></img></button>
                            <button className=" btn btn-cart">Comprar</button>
                        </div>
                    </div>
                </div>

                <div className="mobile-leite">
                    <div className="products-details">
                        <h1 className="product-name">Talento de Dode de Leite - 85g</h1>
                        <h2 className="product-price">R$ 20,00</h2>
                        <p className="short-description">Uma deliciosa barra de chocolate ao leite recheada com um cremoso e irresistível doce de leite.</p>
                        <div className="btn-container">
                            <button className="btn-shop"><img src="./img/cart.svg"></img></button>

                            <button className="btn-cart">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Leite