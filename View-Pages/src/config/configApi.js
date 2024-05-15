import React from "react"; 
import axios from 'axios'

//Realizando conexão com servidor do Back-end

export default axios.create({

    baseURL:'http://10.144.227.205:8081'
})