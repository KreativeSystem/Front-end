import React, { useState } from "react";
import api from "../../config/configApi";
import { useNavigate } from "react-router-dom";
import Navbar from "../header";

export const ProductForm = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    price: "",
    description: ""
  });

  const [mensagem, setMensagem] = useState("");

  const valorInput = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const sendForms = async (e) => {
    e.preventDefault();

    const headers = {
      "Content-Type": "application/json"
    };

    await api.post("/products", data, { headers })
      .then((response) => {
        setMensagem(response.data.mensagem);
        return navigate("/product-list");
      })
      .catch((error) => {
        setMensagem(error.response.data.mensagem);
      });
  };

  return (
    <div>
      <Navbar />
      <section className="section-tamanho">
        <div className="container overflow-hidden cor-linha">
          <div className="row gx-5">
            <div className="col">
              <div className="p-3 ">Cadastrar Produto</div>
            </div>
          </div>
        </div>
        <div className="margem-forms">
          <form className="row g-3 listar-produtos" onSubmit={sendForms}>
            <div className="col-md-6">
              <label className="form-label">Nome</label>
              <input
                type="text"
                className="form-control input"
                placeholder="Nome do produto"
                name="name"
                onChange={valorInput}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Descrição</label>
                <textarea
                type="text"
                className="form-control input"
                placeholder="Nome do produto"
                name="descricao"
                onChange={valorInput}
                required
                ></textarea>
            </div>
            <div className="col-md-6">
              <label className="form-label">Preço</label>
              <input
                type="text"
                className="form-control input"
                placeholder="Preço do produto"
                name="price"
                onChange={valorInput}
                required
              />
            </div>
            <br></br>
            {mensagem ? <p>{mensagem}</p> : ""}
            <button type="submit" className="btn cadastrar-formulario">
              Cadastrar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ProductForm;
