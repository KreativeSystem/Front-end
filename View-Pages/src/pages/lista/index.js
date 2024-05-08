import React, { useState, useEffect } from "react";
import api from "../../config/configApi";
import Navbar from "../header/index";

export const Lista = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [selectedUser, setSelectedUser] = useState(null);
    const [nextUserId, setNextUserId] = useState(1); // Iniciar com ID 1 por padrão

    {/* listar os usuarios do banco */ }
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
    fetchUsers();
    {/* VISUALIZAR USUARIO */ }
    const openModal = async (id) => {
        try {
            const user = users.find(user => user.id === id);
            setSelectedUser(user);
        } catch (error) {
            console.error("Erro ao obter detalhes do usuário:", error);
        }
    };
    {/* deletar usuario*/ }
    const handleDelete = async (id, index) => {
        try {
            await api.delete(`/users/${id}`);
            const newUsers = [...users];
            newUsers.splice(index, 1);
            setUsers(newUsers);
            localStorage.setItem('users', JSON.stringify(newUsers));
    
            // Recalcular o próximo ID disponível após a exclusão
            setNextUserId(Math.max(...newUsers.map(user => user.id)) + 1);
        } catch (error) {
            console.error("Erro ao excluir usuário:", error);
        }
    };



    {/* Barra de navegação da página */ }
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const shouldRenderPagination = users.length > itemsPerPage;


    return (
        <div>
            <Navbar />
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

                            {currentUsers.map((user,index) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        {/* Adicione os botões de ação aqui */}
                                        <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => openModal(user.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                                            </svg>
                                        </button>
                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Detalhes do usuário</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        {selectedUser && (
                                                            <>
                                                                <p>ID: {selectedUser.id}</p>
                                                                <p>Nome: {selectedUser.name}</p>
                                                                <p>Email: {selectedUser.email}</p>
                                                                <p>Telefone: {selectedUser.phone}</p>
                                                                <p>CEP: {selectedUser.CEP}</p>
                                                                <p>Estado: {selectedUser.state}</p>
                                                                <p>Cidade: {selectedUser.city}</p>
                                                                <p>Rua: {selectedUser.street}</p>
                                                                <p>Numero da residencia: {selectedUser.dwellingNumber}</p>
                                                            </>
                                                        )}
                                                    </div>
                                                    <div class="modal-footer">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    

                                    <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                        </svg>
                                    </button>

                                    <button onClick={() => handleDelete(user.id, index)}>
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

                {/* Barra de navegação da página */}							     |
                {shouldRenderPagination && (
                    <nav aria-label="Page navigation example number-style">
                        <ul className="pagination justify-content-center">
                            {Array.from({ length: Math.ceil(users.length / itemsPerPage) }).map((_, index) => (
                                <li key={index} className="page-item">
                                    <a onClick={() => paginate(index + 1)} href="#" className="page-link">
                                        {index + 1}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}


            </div>

        </div >
    )
}

export default Lista