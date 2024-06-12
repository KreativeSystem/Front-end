import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from '../../Context/AuthContext';

export const TelaPrincial = () => {

    const navigate = useNavigate();

    function navigateCarrinho() {
        navigate('/carrinho-compras');
    }

    function navigatePerfil() {
        navigate('/perfil');
    }

    function navigateAvela() {
        navigate('/avela');
    }

    function navigateCookie() {
        navigate('/cookie');
    }
    function navigateLeite() {
        navigate('/talento-doce-de-leite');
    }
    const navigateSite = () => {
        navigate('/tela-principal');
    }

    const { handleLogout } = useContext(Context);

    const token = localStorage.getItem('token');


    const [cartItemsCount, setCartItemsCount] = useState(0);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem(`cart_${token}`)) || [];
        const count = storedCart.reduce((total, product) => total + (product.quantity || 0), 0);
        setCartItemsCount(count);
    }, [token]);


    return (
        <div>
            <div className="tela_total">


                <div className="fundo">



                    {/* HEADER */}
                    <nav class="navbar navbar-expand-lg fixed-top header">
                        <div class="container-fluid">

                            <img src="./img/logo.png" alt="Logo" class="d-inline-block align-text-top me-auto img-logo" onClick={navigateSite} />


                            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img src="./img/logo-preta.png" alt="" class="img-logo" /></h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <ul class="navbar-nav flex-grow-1 pe-3 nav-a">

                                        <li class="nav-item">
                                            <a class="nav-link topicos mx-lg-2 " href="#sobre">Sobre Nós</a>

                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link topicos mx-lg-2" href="#produtos">Produtos</a>

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
                    <div className="tela_inicial" >
                        <div className="frase">

                            <h1>Chocolate é amor <br />em forma de <br />doce.</h1>


                            <img src="/img/chocolate.png" />
                        </div>

                    </div>
                </div>

                <div className="sobre" id="sobre">
                    <img src="/img/cacau.png" />
                    <div className="informacoes">
                        <h1>Quem somos nós?</h1>
                        <p>De chocolates belgas delicados a trufas artesanais, nossa coleção apresenta uma variedade irresistível de produtos cuidadosamente selecionados para satisfazer os paladares mais exigentes.</p>
                    </div>
                </div>
                <div className="produtos" id="produtos">
                    <div className="catalogo">
                        <h1>Produtos</h1>

                        <div className="chocolates">

                            <div className="chocolate">
                                <img src="/img/talento-doce-leite.png" />
                                <p>Talento de doce de leite</p>
                                <button className="button" onClick={navigateLeite}>COMPRAR</button>
                            </div>

                            <div className="chocolate">
                                <img src="/img/talento2.png" />
                                <p>Talento de avelas</p>
                                <button onClick={navigateAvela}>COMPRAR</button>
                            </div>

                            <div className="chocolate">
                                <img src="/img/talento3.png" />
                                <p>Talento de cokie</p>
                                <button onClick={navigateCookie}>COMPRAR</button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="foolter">
                    <div className="descricao1">
                        <a><img src="/img/likedin.png" /></a>
                        <a><img src="/img/email.png" /></a>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default TelaPrincial