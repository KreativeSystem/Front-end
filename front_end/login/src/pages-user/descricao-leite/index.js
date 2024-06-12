import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from '../../Context/AuthContext';
import { motion } from "framer-motion"; // Importe motion do framer-motion

export const Leite = () => {
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
        setIsInCart(storedCart.some(item => item.id === 'talento_leite'));
    }, [userId]);

    const addToCart = () => {
        if (!isInCart) {
            const updatedCart = [...cart, { id: 'talento_leite', name: "Talento de Doce de Leite - 85g", price: 20.00, image: '/img/doce_de_leite.png', quantity: quantity }];
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

   
    const navigateSite = () => {
        navigate('/tela-principal');
    }
    const handleBuyNow = () => {
        
        if (!isInCart) {
            const updatedCart = [...cart, { id: 'talento_avela', name: 'Talento de Avelãs - 85g', price: 20.00, image: '/img/talento.png', quantity: quantity }];
            setCart(updatedCart);
            localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
            setIsInCart(true);

            // Ative a animação
            setIsAddingToCart(true);
            setTimeout(() => {
                setIsAddingToCart(false);
            }, 1000); // Defina o tempo para desativar a animação (1 segundo)
        }
    navigate('/carrinho-compras');
};

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
                                            <a class="nav-link topicos mx-lg-2" onClick={navigateSite}>Início</a>

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

                            <button class="navbar-toggler sanduba" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                {/* <span class="navbar-toggler-icon sanduba"></span> */}
                                <img src="/img/ion_menu.png" />
                            </button>
                        </div>
                    </nav>
                    {/* FIM DO HEADER */}
                    <section className="section-position-carrinho">
                <div className="row descricao-t-l">
                    
                    <motion.div
                    className="img-talento"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, scale: isAddingToCart ? 1.2 : 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src="/img/doce_de_leite.png" className="img" alt="Talento de doce de leite" />
                </motion.div>
                    
                    <div className="circle-leite">
                        <div className="products-details">
                            <h1 className="product-name">Talento de Doce de Leite - 85g</h1>
                            <h2 className="product-price-leite">R$ 20,00</h2>
                            <p className="short-description1">Uma deliciosa barra de chocolate ao leite recheada com um cremoso e irresistível doce de leite.</p>
                            <div className="btn-container">
                           
                                <button className="btn btn-shop" onClick={addToCart} disabled={isInCart}>
                                    <img src="./img/cart.svg" alt="Adicionar ao Carrinho"></img>
                                </button>
                                <button className="btn btn-cart" onClick={handleBuyNow}>Comprar</button>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-leite">
                        <div className="products-details">
                            <h1 className="product-name">Talento de Doce de Leite - 85g</h1>
                            <h2 className="product-price-cookie">R$ 20,00</h2>
                            <p className="short-description1">Uma deliciosa barra de chocolate ao leite recheada com um cremoso e irresistível doce de leite.</p>
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

export default Leite;
