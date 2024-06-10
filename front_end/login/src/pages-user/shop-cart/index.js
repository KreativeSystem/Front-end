import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/AuthContext";

const Cart = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const { handleLogout } = useContext(Context); // Não é necessário verificar authenticated aqui
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

    const navigateSite = () => {
        navigate('/tela-principal');
    }

    const isCartEmpty = cart.length === 0; // Verifica se o carrinho está vazio

    const totalItems = cart.reduce((total, product) => total + (product.quantity || 0), 0); // Certifique-se de somar a quantidade, considerando produtos sem quantidade definida
    const totalPrice = cart.reduce((total, product) => total + (product.price * (product.quantity || 0)), 0); // Certifique-se de somar o preço * quantidade, considerando produtos sem quantidade definida

    return (
        <div>
           {/* HEADER */}
           <nav className="navbar navbar-expand-lg fixed-top header"> {/* Corrigido 'class' para 'className' */}
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
                                            <a className="nav-link topicos mx-lg-2" href="#sobre"></a>

                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link topicos mx-lg-2" href="#produtos"></a>

                                        </li>
                                    </ul>
                                    <div className="icones">

                                        <a onClick={navigateCarrinho}><img src="/img/cart.png" /></a>
                                        
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
            <h2>Carrinho de compras</h2>
                <div className="row descrição">
                
                    {isCartEmpty ? (
                        <p>Seu carrinho está vazio.</p>
                    ) : (
                        cart.map((product, index) => (
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
                        ))
                    )}
                </div>
            </section>
            {/* Botão de Finalizar Compra */}
            {!isCartEmpty && (
                <div className="carrinho-footer">
                <div className="carrinho-info">
                    <p>{totalItems} itens - Total: R$ {totalPrice.toFixed(2)}</p>
                </div>
                <button
                    className="btn-finalizar-compra btn "
                    onClick={() => navigate('/finalizar-compra')}
                >
                    Finalizar Compra
                </button>
            </div>
        )}
    </div>
);
};

export default Cart;
