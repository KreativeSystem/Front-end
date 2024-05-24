import React,{useContext} from "react";
import Navbar from "../header";
import { Context } from "../../Context/AuthContext";

export const Dashboard = () => {
  const token = localStorage.getItem('token')
  const {authenticated} = useContext(Context)
    console.log("na tela dashboard o usuario esta" + authenticated)

    return (
        <div>
            <Navbar/>

            <div className="cards">
  
      <div className="card mb-3 card1" >
        <img src="/img/users.png" alt=""/>
        <div className="card-body">
          <h5 className="card-title">345</h5>
         </div>
      </div>

      <div className="card mb-3 card2" >
        <img src="/img/entregas.png" alt=""/>
        <div className="card-body">
          <h5 className="card-title">43</h5>
          <p className="card-text">Entregas</p>
        </div>
      </div>

      <div className="card mb-3 card3" >
        <img src="/img/completas.png" alt=""/>
        <div className="card-body">
          <h5 className="card-title">56</h5>
          <p className="card-text">Concluidas</p>
        </div>
      </div>

      <div className="card mb-3 card4" >
        <img src="/img/alertas.png" alt=""/>
        <div className="card-body">
          <h5 className="card-title">67</h5>
          <p className="card-text">Alertas</p>
        </div>
      </div>
    </div>
   {<p>token:{token}</p>}
        </div>
    )
}
export default Dashboard