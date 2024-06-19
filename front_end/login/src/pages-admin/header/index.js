import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Context/AuthContext';

export const Navbar = () => {

    function navigateDashboard() {
        navigate('/dashboard');
    }

    const navigate = useNavigate();
    const { authenticated, handleLogout } = useContext(Context);

    console.log("Na tela de dashboard o usuario esta " + authenticated);

    const token = localStorage.getItem('token');

    function navigateUsersList() {
        navigate('/users-list');
    }

    function navigateProductList() {
        navigate('/product-list');
    }

    function navigateForm() {
        navigate('/form');
    }

    function navigateProduct() {
        navigate('/product-list');
    }
    function navigateDashboard() {
        navigate('/dashboard');
    }
    function navigateCompras() {
        navigate('/compras');
    }
    
    
    return (
        <div>
            
               
<nav class="navbar navbar-expand-lg header1">
                <div class="container-fluid">

                    <img src="./img/logo-preta.png" alt="Logo" class="d-inline-block align-text-top me-auto img-logo" />


                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img src="./img/logo-preta.png" alt="" className="img-logo" /></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav flex-grow-1 pe-3 nav1">

                                <li class="nav-item">
                                    <a class="topicos1 mx-lg-2" onClick={navigateDashboard} >Dashboard</a>

                                </li>
                                <li class="nav-item">
                                    <a class="topicos1 mx-lg-2" onClick={navigateUsersList}>Listar</a>

                                </li>
                                <li class="nav-item">
                                    <a class="topicos1 mx-lg-2" onClick={navigateForm}>Formulario</a>

                                </li>
                                <li class="nav-item">
                                    <a class="topicos1 mx-lg-2" onClick={navigateProduct}>Produtos</a>

                                </li>
                                <li class="nav-item">
                                    <a class="topicos1 mx-lg-2" onClick={navigateCompras}>Compras</a>

                                </li>

                                <li class="nav-item">
                                    <a class="topicos3 mx-lg-2" onClick={handleLogout}>SAIR</a>

                                </li>
                            </ul>

                            <div className='porta'>
                                <a onClick={handleLogout}><img src='./img/door.png' /></a>
                            </div>



                        </div>
                    </div>

                    <button class="navbar-toggler sanduba1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        {/* <span class="navbar-toggler-icon sanduba"></span> */}
                        <img src="/img/ion_menu.png" />
                    </button>
                </div>
            </nav>


        </div>
    )
}

export default Navbar