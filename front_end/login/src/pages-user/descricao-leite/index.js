import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from '../../Context/AuthContext';

export const Leite = () => {
    const navigate = useNavigate();
    const { handleLogout } = useContext(Context);
    const token = localStorage.getItem('token');
    const userId = token ? token : "guest";

    const [cart, setCart] = useState([]);
    const [isInCart, setIsInCart] = useState(false);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
        setCart(storedCart);
        setIsInCart(storedCart.some(item => item.id === 'talento_leite'));
    }, [userId]);

    const addToCart = () => {
        if (!isInCart) {
            const updatedCart = [...cart, { id: 'talento_leite', name: "Talento de Doce de Leite - 85g", price: 20.00, image: '/img/doce_de_leite.png' }];
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
    const navigateSite = () => {
        navigate('/tela-principal');
    }

    return (
        <div className="body">
            {/* HEADER */}
            <nav class="navbar navbar-expand-lg fixed-top header">
                        <div class="container-fluid">

                            <img src="./img/logo.png" alt="Logo" class="d-inline-block align-text-top me-auto img-logo" onClick={navigateSite}/>


                            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img src="./img/logo-preta.png" alt="" class="img-logo" /></h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <ul class="navbar-nav flex-grow-1 pe-3 nav-a">

                                        <li class="nav-item">
                                            <a class="nav-link topicos mx-lg-2" href="#sobre">Sobre Nós</a>

                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link topicos mx-lg-2" href="#produtos">Produtos</a>

                                        </li>
                                    </ul>
                                    <div className="icones">

                                        <a onClick={navigateCarrinho}><img src="/img/cart.png" /></a>
                                        
                                        <a onClick={handleLogout}><img src="/img/sair.png" /></a>

                                        
                                    </div>



                                </div>
                            </div>

                            <button class="navbar-toggler sanduba" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                {/* <span class="navbar-toggler-icon sanduba"></span> */}
                                <img src="/img/ion_menu.png" />
                            </button>
                        </div>
                    </nav>
                    {/* FIM DO HEADER */}
            <div className="row descrição">
                <div className="img-talento">
                    <img src="/img/doce_de_leite.png" className="img" alt="Talento de Doce de Leite" />
                </div>
                <div className="circle-leite">
                    <div className="products-details">
                        <h1 className="product-name">Talento de Doce de Leite - 85g</h1>
                        <h2 className="product-price">R$ 20,00</h2>
                        <p className="short-description">Uma deliciosa barra de chocolate ao leite recheada com um cremoso e irresistível doce de leite.</p>
                        <div className="btn-container">
                            <button className="btn btn-shop" onClick={addToCart} disabled={isInCart}><img src="./img/cart.svg" alt="Adicionar ao Carrinho"></img></button>
                            <button className="btn btn-cart">Comprar</button>
                        </div>
                    </div>
                </div>
                <div className="mobile-leite">
                    <div className="products-details">
                        <h1 className="product-name">Talento de Doce de Leite - 85g</h1>
                        <h2 className="product-price">R$ 20,00</h2>
                        <p className="short-description">Uma deliciosa barra de chocolate ao leite recheada com um cremoso e irresistível doce de leite.</p>
                        <div className="btn-container">
                            <button className="btn-shop" onClick={addToCart} disabled={isInCart}><img src="./img/cart.svg" alt="Adicionar ao Carrinho"></img></button>
                            <button className="btn-cart">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leite;
