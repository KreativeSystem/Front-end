import React, { useContext, useEffect, useState } from "react";
import Navbar from "../header";
import { Context } from "../../Context/AuthContext";
import api from "../../config/configApi"

export const Dashboard = () => {
  const token = localStorage.getItem('token')
  const { authenticated } = useContext(Context)
  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [shop, setShop] = useState(0)
  const [searchText, setSearchText] = useState("");
  const [cards, setCards] = useState([]);
  console.log("na tela dashboard o usuario esta" + authenticated)

  useEffect(() => {
    // Função para buscar a contagem de usuários
    const fetchUserCount = async () => {
      try {
        const response = await api.get('/users-count');
        if (!response.data.error) {
          setUserCount(response.data.count);
        } else {
          console.error(response.data.mensagem);
        }
      } catch (error) {
        console.error("Erro ao buscar a contagem de usuários:", error);
      }
    };

    // Função para buscar a contagem de produtos no localStorage
    const fetchProductsCount = async () => {
      try {
        const response = await api.get('/products-count');
        if (!response.data.error) {
          setProductCount(response.data.count);
        } else {
          console.error(response.data.mensagem);
        }
      } catch (error) {
        console.error("Erro ao buscar a contagem de produtos:", error);
      }

    };

    const fetchShopsCount = async () => {
      try {
        const response = await api.get('/shop-count');
        if (!response.data.error) {
          setShop(response.data.count);
        } else {
          console.error(response.data.mensagem);
        }
      } catch (error) {
        console.error("Erro ao buscar a contagem de compras:", error);
      }

    };
    fetchShopsCount();
    fetchUserCount();
    fetchProductsCount();
  }, []);



  const handleAddCard = () => {
    if (searchText) {
      setCards([...cards, searchText]);
      setSearchText("");
    }
  };

  // Função para remover um card
  const handleRemoveCard = (index) => {
    const newCards = cards.filter((_, i) => i !== index);
    setCards(newCards);
  };





  return (
    <div>
      <Navbar />
      <div class="card card-bv">
        <div class="card-body body-bv">
          <h1>Olá,bem vindo!</h1>
          <p>Sua solução administrativa completa</p>


          <img src='./img/corporativo.svg' />


        </div>
      </div>
      <div class="cards-d">
        <div class="card  mb-3 card-d" >
          <div class="card-body">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
            </svg>
            <h5 class="card-title title-d">Usuário</h5>
            <p class="card-text text-d">{userCount}</p>
          </div>
        </div>
        <div class="card  mb-3 card-d" >
          <div class="card-body">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-gear" viewBox="0 0 16 16">
              <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
            </svg>
            <h5 class="card-title title-d">Produtos</h5>
            <p class="card-text text-d-2">{productCount}</p>
          </div>
        </div>
        <div class="card  mb-3 card-d" >
          <div class="card-body">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
            </svg>
            <h5 class="card-title title-d">Compras</h5>
            <p class="card-text text-d-2">{shop}</p>

          </div>
        </div>

      </div>

      <div className='tarefas'>

        <h1>Bloco de notas</h1>
        <div className="search-bar">

          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Digite algo..."
          />
          <button onClick={handleAddCard}>ADICIONAR</button>
        </div>

        {/* Exibindo os Cards Criados */}
        <div className="dynamic-cards">
          {cards.map((card, index) => (
            <div key={index} className="dynamic-card">
              <p>{card}</p>
              <button onClick={() => handleRemoveCard(index)}>X</button>
            </div>
          ))}

        </div>
      </div>

      {/*  <div className="cards">
  
      <div className="card mb-3 card1" >
        <img src="/img/users.png" alt=""/>
        <div className="card-body">
          <h5 className="card-title">{userCount}</h5>
          <p className="card-text">Usuário</p>
         </div>
      </div>

      <div className="card mb-3 card2" >
        <img src="/img/entregas.png" alt=""/>
        <div className="card-body">
          <h5 className="card-title">{productCount}</h5>
          <p className="card-text">Produtos</p>
        </div>
      </div>

      <div className="card mb-3 card3" >
        <img src="/img/completas.png" alt=""/>
        <div className="card-body">
          <h5 className="card-title">56</h5>
          <p className="card-text">Compras</p>
        </div>
      </div>

    </div>*/}
    </div>
  )
}
export default Dashboard