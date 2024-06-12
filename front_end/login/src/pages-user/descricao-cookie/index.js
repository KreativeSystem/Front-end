// Código do Produto
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from '../../Context/AuthContext';
import { motion } from "framer-motion"; // Importe motion do framer-motion

export const Cookie = () => {
    const navigate = useNavigate();
    const { handleLogout } = useContext(Context);
    const token = localStorage.getItem('token');
    const userId = token ? token : "guest";
    const [isAddingToCart, setIsAddingToCart] = useState(false); // Estado para controlar a animação
    const [quantity, setQuantity] = useState(1);

    const [cart, setCart] = useState([]);
    const [isInCart, setIsInCart] = useState(false);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
        setCart(storedCart);
        setIsInCart(storedCart.some(item => item.id === 'talento_cookie'));
    }, [userId]);

    const addToCart = () => {
        if (!isInCart) {
            const updatedCart = [...cart, { id: 'talento_cookie', name: "Talento Cookies'n Cream - 85g", price: 20.00, image: '/img/cookie.png', quantity: quantity }];
            setCart(updatedCart);
            localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
            setIsInCart(true);

            // Ative a animação
            setIsAddingToCart(true);
            setTimeout(() => {
                setIsAddingToCart(false);
            }, 1000); // Defina o tempo para desativar a animação (1 segundo)
        }
    };

    const [cartItemsCount, setCartItemsCount] = useState(0);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem(`cart_${token}`)) || [];
        const count = storedCart.reduce((total, product) => total + (product.quantity || 0), 0);
        setCartItemsCount(count);
    }, [token]);

    const navigateCarrinho = () => {
        navigate('/carrinho-compras');
    };

    const navigatePerfil = () => {
        navigate('/perfil');
    };

    const handleBuyNow = () => {
        navigate('/carrinho-compras');
    };

    const navigateSite = () => {
        navigate('/tela-principal');
    }

    return (
        <div className="body">
            {/* HEADER */}
            <nav className="navbar navbar-expand-lg fixed-top header">
                <div className="container-fluid">

                    <img src="./img/logo.png" alt="Logo" className="d-inline-block align-text-top me-auto img-logo" onClick={navigateSite} />


                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img src="./img/logo-preta.png" alt="" className="img-logo" /></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav flex-grow-1 pe-3 nav-a">

                                <li className="nav-item">
                                    <a className="nav-link topicos mx-lg-2" onClick={navigateSite}>Início</a>

                                </li>
                            </ul>
                            <div className="icones">

                            <a onClick={navigateCarrinho} style={{ position: 'relative' }}>
                                            <img src="/img/cart.png" />
                                            {cartItemsCount > 0 && (
                                                <span style={{
                                                    position: 'absolute',
                                                    top: '-5px',
                                                    right: '-5px',
                                                    backgroundColor: 'red',
                                                    color: 'white',
                                                    borderRadius: '50%',
                                                    padding: '2px 6px',
                                                    fontSize: '10px'
                                                }}>{cartItemsCount}</span>
                                            )}
                                            {cartItemsCount > 0 && (
                                                <span className="cart-badge"></span>
                                            )}
                                        </a>
                                <a onClick={handleLogout}><img src="/img/sair.png" /></a>

                                
                            </div>



                        </div>
                    </div>

                    <button className="navbar-toggler sanduba" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon sanduba"></span> */}
                        <img src="/img/ion_menu.png" />
                    </button>
                </div>
            </nav>
            {/* FIM DO HEADER */}
            <section className="section-position-carrinho">
                <div className="row descricao-t">
                <motion.div
                    className="img-talento"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, scale: isAddingToCart ? 1.2 : 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src="/img/cookie.png" className="img" alt="Talento de cookie" />
                </motion.div>
                    <div className="circle-cookie">
                        <div className="products-details">
                            <h1 className="product-name">Talento Cookies'n Cream - 85g</h1>
                            <h2 className="product-price-cookie">R$ 20,00</h2>
                            <p className="short-description1">Barra de chocolate ao leite saborosa e gostosa com pedacinhos de cookies e creme. Essa deliciosa combinação deixará seu dia feliz.</p>
                            <div className="btn-container">
                                <button className="btn btn-shop" onClick={addToCart} disabled={isInCart}>
                                    <img src="./img/cart.svg" alt="Adicionar ao Carrinho"></img>
                                </button>
                                <button className="btn btn-cart" onClick={handleBuyNow}>Comprar</button>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-cookie">
                        <div className="products-details">
                            <h1 className="product-name">Talento Cookies'n Cream - 85g</h1>
                            <h2 className="product-price-cookie">R$ 20,00</h2>
                            <p className="short-description1">Barra de chocolate ao leite saborosa e gostosa com pedacinhos de cookies e creme. Essa deliciosa combinação deixará seu dia feliz.</p>
                            <div className="btn-container">
                                
                                <button className="btn btn-shop" onClick={addToCart} disabled={isInCart}>
                                    <img src="./img/cart.svg" alt="Adicionar ao Carrinho"></img>
                                </button>
                                <button className="btn btn-cart" onClick={handleBuyNow}>Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cookie;
