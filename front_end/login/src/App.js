import React, {useContext} from 'react'
import {Route, BrowserRouter as Router} from "react-router-dom";
import { AuthProvider } from './Context/AuthContext';
import RoutesAdmin from './routes/routesAdmin';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <RoutesAdmin/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;