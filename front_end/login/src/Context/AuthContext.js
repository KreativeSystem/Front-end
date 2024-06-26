import React, { createContext, useEffect, useState } from "react";
import api from '../config/configApi.js';

const Context = createContext();

function AuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getLogin = async () => {
            const token = localStorage.getItem('token');

            if (token) {
                api.defaults.headers.Authorization = `Bearer ${token}`;
                setAuthenticated(true);
            }
            setLoading(false);
        };

        getLogin();
    }, []);

    if (loading) {
        return <h1>Carregando...</h1>;
    }

    const valUser = async () => {
        const valueToken = localStorage.getItem('token');

        const headers = {
            'headers': {
                'Authorization': 'Bearer ' + valueToken
            }
        };
        
        try {
            await api.get("/val-token", headers);
            return true;
        } catch {
            setAuthenticated(false);
            localStorage.removeItem('token');
            api.defaults.headers.Authorization = undefined;
            return false;
        }
    };

    async function signIn() {
        setAuthenticated(true);
    }

    function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined;
    }

    return (
        <Context.Provider value={{ authenticated, signIn, handleLogout, valUser }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider };
