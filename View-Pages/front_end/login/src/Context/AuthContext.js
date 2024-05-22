import React, { createContext, useEffect, useState } from "react";
import api from "../config/configApi.js";

const Context = createContext()

function AuthProvider({children}){
    const [authenticated, usesuthenticated] = useState(false)

     useEffect(()=>{

        const getLogin = async() =>{
            const token =localStorage.getItem('token')

            if(token){
                api.defaults.headers.Authorization = `Bearer ${(token)}`
                usesuthenticated(true)
            }
        }
     },[])

    return(
        <Context.Provider value={{authenticated: false}}>
            {children}
        </Context.Provider>
    )
}
export  {AuthProvider, Context}