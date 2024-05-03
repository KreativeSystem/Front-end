import React from 'react';

export const Navbar = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg cor-header ">
                    <div className="container-fluid">

                        <a className="navbar-brand" href="#">
                            <img src="/img/bootstrap.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />

                        </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <a className="nav-link active cor-link" aria-current="page" href="/dashboard"><img src="/img/controle.png" alt="" width="20" height="20" />
                                        Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link cor-link" href="/lista"><img src="/img/list.png" alt="" width="20" height="20" />
                                        Listar</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link cor-link" href="/visualizar">  <img src="/img/visualizar.png" alt="" width="20" height="20" />
                                        Visualizar</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link cor-link" href="/formulario"> <img src="/img/menu.png" alt="" width="20" height="20" />
                                        Formulário</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link cor-link" href="/alertas"> <img src="/img/alerta.png" alt="" width="20" height="20" />
                                        Alerta</a>
                                </li>

                                <li className="nav-item">


                                    <a class="nav-link dropdown cor-link " data-bs-toggle="dropdown" aria-expanded="false" href="#">
                                        <img src="/img/user.png" alt="" width="20" height="20" />
                                        Customers
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li><a href="/"><button type="button" class="btn btn">Login</button></a></li>
                                        <li><a href="/addUser"><button type="button" class="btn btn-primary">Sing-up</button></a></li>
                                        <li><hr class="dropdown-divider" /></li>

                                    </ul>
                                </li>

                            </ul>
                        </div>

                    </div>

                </nav>

            </header>
        </div>
    )
}

export default Navbar