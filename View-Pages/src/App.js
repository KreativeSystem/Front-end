import React from 'react'
import {Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Login } from './pages/login';
import {Dashboard} from './pages/Dashboard';
import { AddUser } from './pages/addUser';
import { recoverPass } from './pages/recoverPass';
import {Lista} from './pages/lista'
import {Formulario} from './pages/formulario'
import{Visualizar} from './pages/visualizar'
import {Alertas} from './pages/alertas'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          
          <Route path='/alertas' Component={Alertas}/>
          <Route path='/formulario' Component={Formulario}/>
          <Route path='/visualizar' Component={Visualizar}/>
          <Route path = "/" Component={Login}/>
          <Route path = "/dashboard" Component={Dashboard}/>
          <Route path="/lista" Component={Lista}/>
          <Route path="/cadastro" Component={AddUser}/>
          <Route path="/redefinir_senha" Component={recoverPass}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
