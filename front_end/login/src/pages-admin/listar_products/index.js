import React, { useEffect, useState } from "react";
import api from "../../config/configApi"
import Navbar from "../header";
import { useNavigate } from 'react-router-dom';

export const ListarProdutos = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get('/products');
      setProducts(response.data.products || []);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  };

  const openModal = async (id) => {
    try {
      const product = products.find(product => product.id === id);
      setSelectedProduct(product);
    } catch (error) {
      console.error("Erro ao obter detalhes do produto:", error);
    }
  };

  
  function navigateFormProduct() {
    navigate('/form-product');
}

  // Barra de navegação da página
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const shouldRenderPagination = products.length > itemsPerPage;

  return (
    <div>
      <Navbar />
      <section className="cor-fundo">
        <div className="container overflow-hidden cor-linha">
          <div className="row gx-5">
            <div className="col">
              <div className="p-3">Listar Produtos</div>
            </div>
            <div className="col text-end">
              <div className="p-3">
                <button type="button" className="btn cadastrar-listar">
                  <a onClick={navigateFormProduct}>Cadastrar</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <table className="table table-responsive">
          <thead className="table-secondary">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Descrição</th>
              <th scope="col">Preço</th>
              
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>{product.descricao}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {shouldRenderPagination && (
          <nav aria-label="Page navigation example number-style">
            <ul className="pagination justify-content-center">
              {Array.from({ length: Math.ceil(products.length / itemsPerPage) }).map((_, index) => (
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
  )
}
export default ListarProdutos;
