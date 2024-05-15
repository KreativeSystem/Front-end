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
        const [editingUserId, setEditingUserId] = useState(null);
        const [formComplete, setFormComplete] = useState(false);
        const [editedUser, setEditedUser] = useState({
            name: '',
            email: '',
            password: '',
            phone: '',
        });

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

        {/* editar */ }
        const handleEditUser = (userId) => {
            const userToEdit = users.find((user) => user.id === userId);
            setEditedUser(userToEdit);
            setEditingUserId(userId);
        };

        const handleCloseEditing = () => {
            setEditingUserId(null);
            setEditedUser({});
        };

        const handleChange = (e) => {
            const { name, value } = e.target;
            setEditedUser(prevState => ({
                ...prevState,
                [name]: value
            }));
            setFormComplete(checkFormCompleteness({ ...editedUser, [name]: value })); // Atualize o estado de formComplete
        };

        const headers = {
            'Content-Type': 'application/json'
        }

        const handleSubmit = async (e) => {
            e.preventDefault();
            // Verifique se todos os campos obrigatórios estão preenchidos
            if (!checkFormCompleteness(editedUser)) {
                console.error("Todos os campos devem ser preenchidos");
                setFormComplete(true)
                return;
            }

            try {
                await api.put(`/users/${editingUserId}`, editedUser, { headers });
                fetchUsers();
                handleCloseEditing();
            } catch (error) {
                console.error("Erro ao atualizar usuário:", error);
            }
        };
        const checkFormCompleteness = (user) => {
            const { name, email, phone, state, dwellingNumber, city, street, CEP } = user;
            return !!(name && email && phone && state && dwellingNumber && city && street && CEP);
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
                                    <button type="button" className="botao" > Cadastrar</button>
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

                                {currentUsers.map((user, index) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td className="butons">
                                            {/* Adicione os botões de ação aqui */}
                                            <button className="btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => openModal(user.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                                                </svg>
                                            </button>
                                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-fullscreen-md-down">
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




                                            <button type="button" className="btn" onClick={() => handleEditUser(user.id)}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                            </svg></button>
                                            {editingUserId === user.id && (
                                                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 999 }}>
                                                    <div className="modal-dialog modal-dialog-centered">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title">Editar Usuário</h5>
                                                                <button type="button" className="btn-close" onClick={handleCloseEditing}></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                {editedUser && (<form onSubmit={handleSubmit}>
                                                                    <div className="modal-body">
                                                                        <div className="mb-3">
                                                                            <label htmlFor="name" className="form-label">Nome</label>
                                                                            <input type="text" className="form-control" id="name" name="name" value={editedUser.name || ''} onChange={handleChange} />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label htmlFor="email" className="form-label">Email</label>
                                                                            <input type="email" className="form-control" id="email" name="email" value={editedUser.email || ''} onChange={handleChange} />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label htmlFor="phoneNumber" className="form-label">Telefone</label>
                                                                            <input type="text" className="form-control" id="phone" name="phone" value={editedUser.phone || ''} onChange={handleChange} />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label htmlFor="state" className="form-label">Estado</label>
                                                                            <input type="text" className="form-control" id="state" name="state" value={editedUser.state || ''} onChange={handleChange} />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label htmlFor="dwellingNumber" className="form-label">Número de Residência</label>
                                                                            <input type="number" className="form-control" id="dwellingNumber" name="dwellingNumber" value={editedUser.dwellingNumber || ''} onChange={handleChange} />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label htmlFor="city" className="form-label">Cidade</label>
                                                                            <input type="text" className="form-control" id="city" name="city" value={editedUser.city || ''} onChange={handleChange} />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label htmlFor="street" className="form-label">Rua</label>
                                                                            <input type="text" className="form-control" id="street" name="street" value={editedUser.street || ''} onChange={handleChange} />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label htmlFor="CEP" className="form-label">CEP</label>
                                                                            <input type="number" className="form-control" id="CEP" name="CEP" pattern="[0-9]+$" value={editedUser.CEP || ''} onChange={handleChange} />
                                                                        </div>
                                                                        <button type="submit" className="btn btn-primary" disabled={!formComplete}>Salvar</button>
                                                                    </div>
                                                                </form>)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}


                                            <div class="dropdown">
                                                <button class="btn  " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                                    </svg>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><button type="button" class="btn btn-primary" onClick={() => handleDelete(user.id, index)}>sim</button></li>
                                                    <li><button type="button" class="btn btn-secondary">não</button></li>

                                                </ul>

                                            </div>
                                        </td>


                                    </tr>


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