import React, { useState, useEffect, useContext} from "react";
import api from "../../config/configApi"
import { useNavigate } from "react-router-dom"
import { Context } from "../../Context/AuthContext";

export const Cart = () => {

   
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
        <div>
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
                <section className="section-position-carrinho">
                <div className="card card-carrinho" >
                    <div className="card-body card-body-carrinho">
                        <img src="/img/talento-1.png" className="card-img-top" alt="" />
                        <h4 className="card-title card-title-carrinho">Talento de Avelãs</h4>
                        <div className="price">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item price-item"><h4 className="card-title">preço</h4></li>
                            </ul>
                            <button type="button" className="btn-close" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
                <div className="card card-carrinho" >
                    <div className="card-body card-body-carrinho">
                        <img src="/img/talento-2.png" className="card-img-top" alt="" />
                        <h4 className="card-title card-title-carrinho">Talento recheado de cookie e cream</h4>
                        <div className="price">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item price-item"><h4 className="card-title">preço</h4></li>
                            </ul>
                            <button type="button" className="btn-close" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
                <div className="card card-carrinho" >
                    <div className="card-body card-body-carrinho">
                        <img src="/img/talento-3.png" className="card-img-top" alt="" />
                        <h4 className="card-title card-title-carrinho">Talento cereas e passas</h4>
                        <div className="price">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item price-item"><h4 className="card-title">preço</h4></li>
                            </ul>
                            <button type="button" className="btn-close" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
                <div className="purchase">
                    <h4 className="card-title value-pay">valor a pagar</h4>
                    <button type="button" class="btn btn-danger finalizar">Finalizar</button>
                </div>
            </section>

        </div>
            
    )
}
export default Cart