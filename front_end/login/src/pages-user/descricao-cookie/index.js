import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from '../../Context/AuthContext';

export const Cookie = () => {
    const navigate = useNavigate();
    const { handleLogout } = useContext(Context);
    const token = localStorage.getItem('token');
    const userId = token ? token : "guest";

    const [cart, setCart] = useState([]);
    const [isInCart, setIsInCart] = useState(false);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
        setCart(storedCart);
        setIsInCart(storedCart.some(item => item.id === 'talento_cookie'));
    }, [userId]);

    const addToCart = () => {
        if (!isInCart) {
            const updatedCart = [...cart, { id: 'talento_cookie', name: "Talento Cookies'n Cream - 85g", price: 20.00, image: '/img/cookie.png' }];
            setCart(updatedCart);
            localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
            setIsInCart(true);
        }
    };

    const navigateCarrinho = () => {
        navigate('/carrinho-compras');
    };

    const navigatePerfil = () => {
        navigate('/perfil');
    };

    return (
        <div className="body">
            {/* HEADER */}
            <nav className="navbar navbar-expand-lg fixed-top header-2">
                <div className="container-fluid">
                    <img src="./img/logo-preta.png" alt="Logo" className="d-inline-block align-text-top me-auto img-logo" />
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img src="./img/logo-preta.png" alt="" className="img-logo" /></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link topicos-2 mx-lg-2" href="#">Sobre Nós</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link topicos-2 mx-lg-2" href="#">Produtos</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="icones">
                        <a href="#" onClick={navigateCarrinho}><img src="/img/cart.png" alt="Carrinho" /></a>
                        <a href="#" onClick={navigatePerfil}><img src="/img/user.png" alt="Perfil" /></a>
                        <a onClick={handleLogout}><img src="../img/sair.png" alt="Sair"></img> </a>
                    </div>
                    <button className="navbar-toggler sanduba" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            {/* FIM DO HEADER */}
            <section className="section-position-carrinho">
                <div className="row descrição">
                    <div className="img-talento">
                        <img src="/img/cookie.png" className="img" alt="Talento Cookies'n Cream" />
                    </div>
                    <div className="circle">
                        <div className="products-details">
                            <h1 className="product-name">Talento Cookies'n Cream - 85g</h1>
                            <h2 className="product-price">R$ 20,00</h2>
                            <p className="short-description">Barra de chocolate ao leite saborosa e gostosa com pedacinhos de cookies e creme. Essa deliciosa combinação deixará seu dia feliz.</p>
                            <div className="btn-container">
                                <button className="btn btn-shop" onClick={addToCart} disabled={isInCart}><img src="./img/cart.svg" alt="Adicionar ao Carrinho"></img></button>
                                <button className="btn btn-cart">Comprar</button>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-cookie">
                        <div className="products-details">
                            <h1 className="product-name">Talento Cookies'n Cream - 85g</h1>
                            <h2 className="product-price-cookie">R$ 20,00</h2>
                            <p className="short-description">Barra de chocolate ao leite saborosa e gostosa com pedacinhos de cookies e creme. Essa deliciosa combinação deixará seu dia feliz.</p>
                            <div className="btn-container">
                                <button className="btn-shop" onClick={addToCart} disabled={isInCart}><img src="./img/cart.svg" alt="Adicionar ao Carrinho"></img></button>
                                <button className="btn-cart">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cookie;
