import React from "react"; 
import axios from 'axios'

//Realizando conexão com servidor do Back-end

export default axios.create({

    baseURL:'http://localhost:8081'
})