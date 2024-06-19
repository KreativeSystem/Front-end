import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from '../../Context/AuthContext';

export const TelaPrincial = () => {

    const navigate = useNavigate();

    const navigateCarrinho = () => {
        if (!token) {
            navigate('/login');
        } else {
            navigate('/carrinho-compras');
        }
    }

   

    const navigateAvela = () => {
        navigate('/avela');
    }

    const navigateCookie = () => {
        navigate('/cookie');
    }

    const navigateLeite = () => {
        navigate('/talento-doce-de-leite');
    }

    const navigateSite = () => {
        navigate('/');
    }

    const navigateLogin = () => {
        navigate('/login');
    }

    const navigateCadastro = () => {
        navigate('/addUser');
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
                                            <a className="nav-link topicos mx-lg-2" href="#sobre">Sobre Nós</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link topicos mx-lg-2" href="#produtos">Produtos</a>
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
                                        </a>
                                        {token ? (
                                            <a onClick={handleLogout}><img src="/img/sair.png" /></a>
                                        ) : (
                                            <>
                                                <button className="btn" onClick={navigateLogin}>Login</button>
                                                <button className="btn sing-up" onClick={navigateCadastro}>Sing-up</button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <button className="navbar-toggler sanduba" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                <img src="/img/ion_menu.png" />
                            </button>
                        </div>
                    </nav>
                    {/* FIM DO HEADER */}
                    <div className="tela_inicial">
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

                                {token ? (
                                    <button className="dropdown1" onClick={navigateLeite}>Comprar</button>
                                ) : (
                                    <>
                                        <div class="dropdown dropdown1">
                                            <button class="btn  dropdown-toggel " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                COMPRAR
                                            </button>
                                            <ul class="dropdown-menu dropdownmenu1">

                                            <li><a class="dropdown-item " onClick={navigateLogin}>Login </a></li>
                                            <li><a class="dropdown-item sing" onClick={navigateCadastro}>Cadastro</a></li>
                                        </ul>
                                        </div>
                                    </>
                                )}

                            
                        </div>
                        <div className="chocolate">
                            <img src="/img/talento2.png" />
                            <p>Talento de avelas</p>
                            {token ? (
                                    <button className="dropdown1" onClick={navigateAvela}>Comprar</button>
                                ) : (
                                    <>
                                        <div class="dropdown dropdown1">
                                            <button class="btn  dropdown-toggel " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                COMPRAR
                                            </button>
                                            <ul class="dropdown-menu dropdownmenu1">

                                            <li><a class="dropdown-item " onClick={navigateLogin}>Login </a></li>
                                            <li><a class="dropdown-item sing" onClick={navigateCadastro}>Cadastro</a></li>
                                        </ul>
                                        </div>
                                    </>
                                )}
                        </div>
                        <div className="chocolate">
                            <img src="/img/talento3.png" />
                            <p>Talento de cokie</p>
                            {token ? (
                                    <button className="dropdown1" onClick={navigateCookie}>Comprar</button>
                                ) : (
                                    <>
                                        <div class="dropdown dropdown1">
                                            <button class="btn  dropdown-toggel " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                COMPRAR
                                            </button>
                                            <ul class="dropdown-menu dropdownmenu1">

                                            <li><a class="dropdown-item " onClick={navigateLogin}>Login </a></li>
                                            <li><a class="dropdown-item sing" onClick={navigateCadastro}>Cadastro</a></li>
                                        </ul>
                                        </div>
                                    </>
                                )}
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
        </div >
    )
}

export default TelaPrincial;
