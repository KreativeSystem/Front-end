import React from 'react';

export const Dashboard = ()=>{
    return(
<div>

{/* HEADER */}
{/* <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary header" data-bs-theme="dark">
            <div class="container-fluid ">
                <img src="/img/bootstrap.png" alt=""/>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

        <ul class="navbar-nav " id="navbarNav">
            
            <li class="nav-item">
                <img src="/img/controle.png" alt=""/>
                <a class="nav-link" href="/dashboard">Dashboard</a>
            </li>

            <li class="nav-item">
                <img src="/img/List.png" alt=""/>
                <a class="nav-link" href="/lista">Lista</a>
            </li>

            <li class="nav-item">
                <img src="/img/menu.png" alt=""/>
                <a class="nav-link" href="/formulario">Formulário</a>
            </li>

            <li class="nav-item">
                <img src="/img/visualizar.png" alt=""/>
                <a class="nav-link" href="/visualizar">Visualizar</a>
            </li>

            <li class="nav-item">
                <img src="/img/alerta.png" alt=""/>
                <a class="nav-link" href="/alertas">Alerta</a>
            </li>

            <li class="nav-item">
                <img src="/img/user.png" alt=""/>
                <a class="nav-link dropdown cor-link" data-bs-toggle="dropdown" aria-expanded="false" href="#">User</a>

                        <ul className="dropdown-menu">
                            <li><button type="button" className="btn btn">Login</button></li>
                            <li><button type="button" className="btn btn-primary">Sing-up</button></li>
                            <li><hr className="dropdown-divider"/></li>
                        </ul>
            </li>
        </ul>
    </nav>
</header> */}

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

{/* FIM DO HEADER */}

<div class="cards">
  
      <div class="card mb-3 card1" >
        <img src="/img/users.png" alt=""/>
        <div class="card-body">
          <h5 class="card-title">345</h5>
          <p class="card-text">Usuários</p>
        </div>
      </div>

      <div class="card mb-3 card2" >
        <img src="/img/entregas.png" alt=""/>
        <div class="card-body">
          <h5 class="card-title">43</h5>
          <p class="card-text">Entregas</p>
        </div>
      </div>

      <div class="card mb-3 card3" >
        <img src="/img/completas.png" alt=""/>
        <div class="card-body">
          <h5 class="card-title">56</h5>
          <p class="card-text">Concluidas</p>
        </div>
      </div>

      <div class="card mb-3 card4" >
        <img src="/img/alertas.png" alt=""/>
        <div class="card-body">
          <h5 class="card-title">67</h5>
          <p class="card-text">Alertas</p>
        </div>
      </div>
    </div>
  
        </div>
    )
}

export default Dashboard