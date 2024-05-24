import React, { useState, useEffect } from "react";
import api from "../../config/configApi"
import { useNavigate } from "react-router-dom"

export const Cart = () => {


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
                                        <a href="#"><img src="/img/cart.png"/></a> 
                                        <a href="#"><img src="/img/user.png"/></a> 
                            </div>

                            <button class="navbar-toggler sanduba" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </nav>
                {/* FIM DO HEADER */}

        </div>
            
    )
}
export default Cart