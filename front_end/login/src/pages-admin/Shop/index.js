import React, { useEffect, useState } from "react";
import api from "../../config/configApi";
import Navbar from "../header";
import { useNavigate } from 'react-router-dom';

export const ListarProdutos = () => {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedShop, setSelectedShop] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    fetchShops();
  }, []);

  const fetchShops = async () => {
    try {
      const response = await api.get('/shop');
      setShops(response.data.shops || []);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao carregar compras:", error);
    }
  };

  const openModal = async (id) => {
    try {
      const selected = shops.find(shop => shop.id === id);
      setSelectedShop(selected);
    } catch (error) {
      console.error("Erro ao obter detalhes da compra:", error);
    }
  };

  const navigateFormProduct = () => {
    navigate('/form-product');
  };

  // Barra de navegação da página
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentShops = shops.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const shouldRenderPagination = shops.length > itemsPerPage;

  return (
    <div>
      <Navbar />
      <section className="cor-fundo">
        <div className="container overflow-hidden cor-linha">
          <div className="row gx-5">
            <div className="col">
              <div className="p-3 listar">
                <p>Compras</p>
              </div>
            </div>
          </div>
        </div>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <table className="table table-responsive">
            <thead className="table-secondary">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Email</th>
                <th scope="col">Itens</th>
              </tr>
            </thead>
            <tbody>
              {currentShops.map((shop, index) => (
                <tr key={shop.id}>
                  <th scope="row">{shop.id}</th>
                  <td>{shop.email}</td>
                  <td>{shop.itens}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {shouldRenderPagination && (
          <nav aria-label="Page navigation example number-style">
            <ul className="pagination justify-content-center">
              {Array.from({ length: Math.ceil(shops.length / itemsPerPage) }).map((_, index) => (
                <li key={index} className="page-item">
                  <a
                    onClick={() => paginate(index + 1)}
                    href="#"
                    className="page-link"
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </section>
    </div>
  );
};

export default ListarProdutos;
