import React from "react";

export const Formulario = () =>{
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

    {/* <div class="formulario">

        <div class="row">

            <div class="comeco">
                Cadastrar
                <button type="button" class="btn btn-success">Listar</button>
            </div>
            
            <div class="col form">
                <input type="text" class="form-control" placeholder="Nome Completo" aria-label="First name"/>
            </div>
            
            <div class="col form">
                <input type="email" class="form-control" placeholder="Email" aria-label="Last name"/>
            </div>

        </div> */}
    
        {/* <div class="row">

            <div class="col form">
              <input type="text" class="form-control" placeholder="Campo 1" aria-label="First name"/>
            </div>
            
            <div class="col form">
              <input type="text" class="form-control" placeholder="Campo 2" aria-label="Last name"/>
            </div>

            <div class="col form">
                <input type="text" class="form-control" placeholder="Campo 3" aria-label="Last name"/>
            </div>

            <div class="col form">
                <input type="text" class="form-control" placeholder="Campo 4" aria-label="Last name"/>
            </div>

          

        </div>
        
        <div class="descricao"> */}
                {/* <textarea class="form-control-1" placeholder="Descrição" id="floatingTextarea2" ></textarea>
                <label ></label>
                <button type="button" class="btn btn-success">Cadastrar</button>
          </div>
            
      </div> */}

      
 <section>
                <div className="container overflow-hidden ">
                    <div className="row gx-5">
                        <div className="col">
                            <div className="p-3">Cadastrar</div>
                        </div>
                        <div className="col">
                            <div class="p-3 text-end">
                                <button type="button" className="btn btn-info">Listar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="formulario">

                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="inputEmail4" className="form-label">Nome</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Nome Completo" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" className="form-label">E-mail</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Melhor e-mail" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail4" className="form-label">Campo 3</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Campo 3" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" className="form-label">Campo 4</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Campo 4" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" className="form-label">Campo 5</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Campo 5" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" className="form-label">Campo 5</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Campo 5" />
                        </div>
                        <div class="col-md-12">
                            <label for="inputCity" className="form-label">Descrição</label>
                            <input type="text" className="form-control" id="inputCity" placeholder="Descrição" />
                        </div>

                        <div class="col-12">
                            <button type="submit" className="btn btn-success">Cadastrar</button>
                        </div>
                    </form>

                </div>

            </section>
</div>
)
}

export default Formulario