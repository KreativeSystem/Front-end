import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages-admin/Dashboard"
import Login from "../pages-admin/login";
import { Context } from "../Context/AuthContext";
import UsersList from "../pages-admin/listar";
import Form from "../pages-admin/formulario";
import Alert from "../pages-admin/alerta";
import RecoverPass from "../pages-admin/recoverPass";
import AddUser from "../pages-admin/addUser"

export default function RoutesAdmin(){

    const {authenticated} = useContext(Context)

    return (

        <Routes>
            <Route path ="/" element = {<Login/>} />
            <Route path ="/dashboard" element = {authenticated ? <Dashboard/> : <Navigate to = "/"/>} />
            <Route path ="/alert" element = {authenticated ? <Alert/> : <Navigate to = "/"/>} />
            <Route path ="/users-list" element = {authenticated ? <UsersList/> : <Navigate to = "/"/>} />
            <Route path ="/form" element = {authenticated ? <Form/> : <Navigate to = "/"/>} />
            <Route path ="/addUser" element={<AddUser/>} />
            <Route path ="/recoverPass" element={<RecoverPass/>} />

        </Routes>
    )

}
