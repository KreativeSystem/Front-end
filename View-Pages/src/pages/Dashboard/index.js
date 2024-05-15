import React from 'react';
import Navbar from '../header';

export const Dashboard = ()=>{
    return(
<div>

<Navbar />

<div class="cards">
  
      <div class="card mb-3 card1" >
        <img src="/img/users.png" alt=""/>
        <div class="card-body">
          <h5 class="card-title">345</h5>
          <p class="card-text">Usuários</p>
        </div>
      </div>

      <div class="card mb-3 card2" >
        <img src="/img/entregas.png" alt=""/>
        <div class="card-body">
          <h5 class="card-title">43</h5>
          <p class="card-text">Entregas</p>
        </div>
      </div>

      <div class="card mb-3 card3" >
        <img src="/img/completas.png" alt=""/>
        <div class="card-body">
          <h5 class="card-title">56</h5>
          <p class="card-text">Concluidas</p>
        </div>
      </div>

      <div class="card mb-3 card4" >
        <img src="/img/alertas.png" alt=""/>
        <div class="card-body">
          <h5 class="card-title">67</h5>
          <p class="card-text">Alertas</p>
        </div>
      </div>
    </div>
  
        </div>
    )
}

export default Dashboard