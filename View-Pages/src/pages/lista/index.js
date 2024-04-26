import React, { useState, useEffect } from "react";
import api from "../../config/configApi";

export const Lista = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers()
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await api.get('/users');
            setUsers(response.data.users || []); // Certifica-se de que users seja inicializado como uma matriz vazia se não houver nenhum usuário retornado
            setLoading(false);
        } catch (error) {
            console.error("Erro ao carregar usuários:", error);
        }
    };

    const modal = (user) => {

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Informações<br />{user.name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Understood</button>
                    </div>
                </div>
            </div>
        </div>

    }

    return (
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
                                <th scope="col">Telefone</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>

                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        {/* Adicione os botões de ação aqui */}
                                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                                            </svg>
                                        </button>

                                        <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                            </svg>
                                        </button>

                                        <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                            </svg>
                                        </button>

                                    </td>
                                </tr>

                                /* 
                                    fazer o modal para o editar e visualizar
                                */
                            ))}

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

        </div >
    )
}

export default Lista