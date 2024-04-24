import React from "react";
import Login from "../login";

export const Lista = () => {
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
<div class="table-responsive">
      <div class="tabela">
            <table className="table table-sm tabela">
                <thead>
                    <div className="titulo ">
                            Lista
                            <button type="button" className="botao">Cadastrar</button>
                    </div>
                        


                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Coluna 4</th>
                        <th scope="col">Coluna 5</th>
                        <th scope="col">Coluna 6</th>
                        <th scope="col">Ações</th>
                        </tr>
                </thead>
            <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Estella</td>
                        <td>estlledias@gmail.com</td>
                        <td>coluna 4</td>
                        <td>coluna 5</td>
                        <td>coluna 6</td>
                        <td><button type="button" class="btn btn-primary">Ações</button></td>
                        
                    </tr>

                    <tr>
                        <th scope="row">2</th>
                        <td>Estella</td>
                        <td>estlledias@gmail.com</td>
                        <td>coluna 4</td>
                        <td>coluna 5</td>
                        <td>coluna 6</td>
                        <td><button type="button" class="btn btn-primary">Ações</button></td>
                        
                       
                    </tr>

                    <tr>
                        <th scope="row">3</th>
                        <td>Estella</td>
                        <td>estlledias@gmail.com</td>
                        <td>coluna 4</td>
                        <td>coluna 5</td>
                        <td>coluna 6</td>
                        <td><button type="button" class="btn btn-primary">Ações</button></td>
                    </tr>
                

            </tbody>
            </table>
        </div>


        <nav aria-label="Page navigation example">

            <ul class="pagination justify-content-center"> 
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
        
          </nav>
    </div>

</div>
    )
}

export default Lista