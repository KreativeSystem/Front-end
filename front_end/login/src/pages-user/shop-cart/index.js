import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/AuthContext";

const Cart = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const { authenticated, handleLogout } = useContext(Context);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem(`cart_${token}`)) || [];
        setCart(storedCart);
    }, [token]);

    const removeProduct = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
        localStorage.setItem(`cart_${token}`, JSON.stringify(updatedCart));
    };

    const navigateCarrinho = () => {
        navigate('/carrinho-compras');
    }
    
    const navigatePerfil = () => {
        navigate('/perfil');
    }

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
                        <a onClick={handleLogout}><img src="../img/sair.png" /></a>
                    </div>
                    <button class="navbar-toggler sanduba" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            {/* FIM DO HEADER */}
            <section className="section-position-carrinho">
                <div className="row descrição">
                    {cart.map((product, index) => (
                        <div className="card card-carrinho" key={index}>
                            <div className="card-body card-body-carrinho">
                                <img src={product.image} className="card-img-top" alt={product.name} />
                                <h4 className="card-title card-title-carrinho">{product.name}</h4>
                                <div className="price">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item price-item"><h4 className="card-title">Preço: R$ {product.price}</h4></li>
                                    </ul>
                                    <button type="button" className="btn-close" aria-label="Close" onClick={() => removeProduct(index)}></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Cart;
