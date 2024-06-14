import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Importe motion do framer-motion
import axios from "axios";

export const Avela = () => {
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get("/products/avela");
                setProduct(response.data.product);
            } catch (error) {
                console.error("Erro ao buscar detalhes do produto:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, []);

    const navigateCarrinho = () => {
        navigate('/carrinho-compras');
    };

    const handleLogout = () => {
        // Implement your handleLogout logic here
    };

    const navigateSite = () => {
        navigate('/tela-principal');
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!product) {
        return <div>Produto não encontrado.</div>;
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
                                    <span style={{
                                        position: 'absolute',
                                        top: '-5px',
                                        right: '-5px',
                                        backgroundColor: 'red',
                                        color: 'white',
                                        borderRadius: '50%',
                                        padding: '2px 6px',
                                        fontSize: '10px'
                                    }}>0</span>
                                </a>

                                <a onClick={handleLogout}><img src="/img/sair.png" /></a>
                            </div>
                        </div>
                    </div>

                    <button className="navbar-toggler sanduba" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <img src="/img/ion_menu.png" />
                    </button>
                </div>
            </nav>
            {/* FIM DO HEADER */}

            <div className="row descricao-t">
                <motion.div
                    className="img-talento"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src="/img/talento.png" className="img" alt="Talento de Avelãs" />
                </motion.div>
                <div className="circle">
                    <div className="products-details">
                        <h1 className="product-name">{product.name}</h1>
                        <h2 className="product-price1">R$ {product.price}</h2>
                        <p className="short-description1">{product.descricao}</p>
                        <div className="btn-container">
                            <button className="btn btn-shop">
                                <img src="./img/cart.svg" alt="Adicionar ao Carrinho" />
                            </button>
                            <button className="btn btn-cart">Comprar</button>
                        </div>
                    </div>
                </div>
                <div className="mobile">
                    <div className="products-details">
                        <h1 className="product-name">{product.name}</h1>
                        <h2 className="product-price1">R$ {product.price}</h2>
                        <p className="short-description1">{product.descricao}</p>
                        <div className="btn-container">
                            <button className="btn-shop">
                                <img src="./img/cart.svg" alt="Adicionar ao Carrinho" />
                            </button>
                            <button className="btn-cart">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Avela;
