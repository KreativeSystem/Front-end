import React from "react";
import axios from "axios"

//realizar conexão com servidor do back-end

export default axios.create({

    baseURL: 'http://localhost:8081'
})