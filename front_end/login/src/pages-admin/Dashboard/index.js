import React, { useContext, useEffect, useState } from "react";
import Navbar from "../header";
import { Context } from "../../Context/AuthContext";
import api from "../../config/configApi"

export const Dashboard = () => {
  const token = localStorage.getItem('token')
  const {authenticated} = useContext(Context)
  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
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
    const fetchProductsCount = () => {
      try {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        setProductCount(cart.length);
      } catch (error) {
        console.error("Erro ao buscar a contagem de produtos:", error);
      }
    };

    fetchUserCount();
    fetchProductsCount();
    }, []);

    
  
    
  

    return (
        <div>
            <Navbar/>

            <div className="cards">
  
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

    </div>
        </div>
    )
}
export default Dashboard