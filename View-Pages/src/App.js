import React from 'react';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login, { login } from './pages/login';
import {Dashboard} from './pages/Dashboard';
import {AddUser} from './pages/addUser'
import {RecoverPass} from './pages/recoverPass';
import {Listar} from './pages/listar';
import {Formulario} from './pages/formulario';
import {Alerta} from './pages/alerta';

import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <div >
      <AuthProvider>
     <Router>
        <Routes>
          <Route path='/' Component={Login}/>
          <Route path='/dashboard' Component={Dashboard}/>
          <Route path='/addUser' Component={AddUser}/>
          <Route path='/recoverPass' Component={RecoverPass}/>
          <Route path='/listar' Component={Listar}/>
          <Route path='/formulario' Component={Formulario}/>
         
          <Route path='/alerta' Component={Alerta}/>
        </Routes>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
