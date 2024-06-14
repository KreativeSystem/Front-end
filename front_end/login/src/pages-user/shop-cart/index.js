import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/AuthContext";
import axios from "axios";

const Cart = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const { handleLogout } = useContext(Context);
    const token = localStorage.getItem('token');
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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

    const updateQuantity = (index, newQuantity) => {
        const updatedCart = [...cart];
        updatedCart[index].quantity = Math.max(1, newQuantity); // Evita quantidade menor que 1
        setCart(updatedCart);
        localStorage.setItem(`cart_${token}`, JSON.stringify(updatedCart));
    };

    const navigateCarrinho = () => {
        navigate('/carrinho-compras');
    };

    const navigateSite = () => {
        navigate('/tela-principal');
    };

    const isCartEmpty = cart.length === 0;

    const totalItems = cart.reduce((total, product) => total + (product.quantity || 0), 0);
    const totalPrice = cart.reduce((total, product) => total + (product.price * (product.quantity || 0)), 0);

    const handleCheckout = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEmail(''); // Limpa o campo de e-mail ao fechar o modal
        setErrorMessage(''); // Limpa qualquer mensagem de erro
    };

    const confirmPurchase = async () => {
        try {
            const response = await axios.post('http://localhost:8081/confirmar-compra', {
                email: email,
                subject: 'Confirmação de Compra',
                text: `Obrigado por sua compra! Total de ${totalItems} itens - R$ ${totalPrice.toFixed(2)}`,
                items: cart // Envia a lista de itens do carrinho
            });

            if (response.status === 200) {
                console.log('E-mail de confirmação enviado com sucesso:', response.data);
                // Implemente a lógica de sucesso aqui (exemplo: exibir mensagem de sucesso)
                alert('Email de confirmação enviado com sucesso!');
            } else {
                console.error('Erro ao enviar e-mail de confirmação:', response.data);
                // Implemente a lógica de erro aqui (exemplo: exibir mensagem de erro)
                setErrorMessage('Erro ao enviar e-mail de confirmação. Por favor, tente novamente mais tarde.');
            }

            closeModal(); // Fecha o modal após enviar a requisição
        } catch (error) {
            console.error('Erro ao fazer requisição:', error);
            setErrorMessage('Erro ao processar a compra. Por favor, tente novamente mais tarde.');
            // Implemente a lógica para exibir a mensagem de erro para o usuário
        }
    };

    return (
        <div className="cart-container">
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
                                <div style={{ position: 'relative', display: 'inline-block' }}>
                                    <a onClick={navigateCarrinho}>
                                        <img src="/img/cart.png" alt="Carrinho" />
                                        {totalItems > 0 && (
                                            <span style={{
                                                position: 'absolute',
                                                top: '-5px',
                                                right: '-5px',
                                                backgroundColor: 'red',
                                                color: 'white',
                                                borderRadius: '50%',
                                                padding: '2px 6px',
                                                fontSize: '10px'
                                            }}>
                                                {totalItems}
                                            </span>
                                        )}
                                    </a>
                                </div>
                                <a onClick={handleLogout}><img src="/img/sair.png" alt="Sair" /></a>
                            </div>
                        </div>
                    </div>
                    <button className="navbar-toggler sanduba" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <img src="/img/ion_menu.png" alt="Menu" />
                    </button>
                </div>
            </nav>
            {/* FIM DO HEADER */}
            <section className="cart-section">
                <h2>Carrinho de compras</h2>
                <div className="cart-items">
                    {isCartEmpty ? (
                        <p>Seu carrinho está vazio.</p>
                    ) : (
                        cart.map((product, index) => (
                            <div className="cart-item" key={index}>
                                <img src={product.image} className="cart-item-image" alt={product.name} />
                                <div className="cart-item-details">
                                    <h4 className="cart-item-title">{product.name}</h4>
                                    <div className="cart-item-price-quantity">
                                        <h4 className="cart-item-price">R$ {product.price.toFixed(2)}</h4>
                                        <div className="quantity-control">
                                            <button className="quantity-btn" onClick={() => updateQuantity(index, product.quantity - 1)}>-</button>
                                            <span className="quantity-value">{product.quantity}</span>
                                            <button className="quantity-btn" onClick={() => updateQuantity(index, product.quantity + 1)}>+</button>
                                        </div>
                                    </div>
                                    <button className="remove-btn" onClick={() => removeProduct(index)}>Remover</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>
            {!isCartEmpty && (
                <div className="cart-footer">
                    <div className="cart-summary">
                        <p>{totalItems} itens - Total: R$ {totalPrice.toFixed(2)}</p>
                    </div>
                    <button className="checkout-btn" onClick={handleCheckout}>Finalizar Compra</button>
                </div>
            )}
            {/* Modal */}
            {showModal && (
                <div className="modal show" tabIndex="-1" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirmação de Compra</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <p>Por favor, insira seu e-mail para receber a confirmação da compra:</p>
                                <input type="email" className="form-control" placeholder="Seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <p>Total de {totalItems} itens - R$ {totalPrice.toFixed(2)}</p>
                                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancelar</button>
                                <button type="button" className="btn btn-primary" onClick={confirmPurchase}>Confirmar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
