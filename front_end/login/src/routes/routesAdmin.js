import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages-admin/Dashboard";
import Login from "../pages-admin/login";
import { Context } from "../Context/AuthContext";
import UsersList from "../pages-admin/listar";
import ProductList from "../pages-admin/listar_products";
import Compras from "../pages-admin/Shop";
import Form from "../pages-admin/formulario";
import Alert from "../pages-admin/alerta";
import RecoverPass from "../pages-admin/recoverPass";
import AddUser from "../pages-admin/addUser";
import Avela from "../pages-user/descricao-avela";
import Cookie from "../pages-user/descricao-cookie";
import Leite from "../pages-user/descricao-leite";
import Cart from "../pages-user/shop-cart";
import Perfil from "../pages-user/perfil";
import TelaPrincial from "../pages-user/landing-page";

export default function RoutesAdmin() {
    const { authenticated } = useContext(Context);

    return (
        <Routes>
            <Route path="/login" element={authenticated ? <Navigate to="/" /> : <Login />} />
            <Route path="/dashboard" element={authenticated ? <Dashboard /> : <Navigate to="/" />} />
            <Route path="/alert" element={authenticated ? <Alert /> : <Navigate to="/" />} />
            <Route path="/users-list" element={authenticated ? <UsersList /> : <Navigate to="/" />} />
            <Route path="/product-list" element={authenticated ? <ProductList /> : <Navigate to="/" />} />
            <Route path="/compras" element={authenticated ? <Compras /> : <Navigate to="/" />} />
            <Route path="/form" element={authenticated ? <Form /> : <Navigate to="/" />} />
            <Route path="/addUser" element={<AddUser />} />
            <Route path="/recoverPass" element={<RecoverPass />} />
            <Route path="/avela" element={authenticated ? <Avela /> : <Navigate to="/" />} />
            <Route path="/cookie" element={authenticated ? <Cookie /> : <Navigate to="/" />} />
            <Route path="/talento-doce-de-leite" element={authenticated ? <Leite /> : <Navigate to="/" />} />
            <Route path="/carrinho-compras" element={authenticated ? <Cart /> : <Navigate to="/" />} />
            <Route path="/perfil" element={authenticated ? <Perfil /> : <Navigate to="/" />} />
            <Route path="/" element={<TelaPrincial />} />
        </Routes>
    );
}
