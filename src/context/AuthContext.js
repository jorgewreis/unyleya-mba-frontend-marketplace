import React from 'react';
import { createContext } from 'react';
import useAuth from '../hooks/useAuth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const { userLogged, loading, loginUser, logoutUser } = useAuth();

    if (loading) {
        return <h1 className='w-screen h-screen flex items-center justify-center font-semibold text-3xl text-gray-600'>Carregando...</h1>
    } else {
        return (
            <AuthContext.Provider value={{ userLogged, loginUser, logoutUser }}>
                { children }
            </AuthContext.Provider>
        )
    }
}

export { 
    AuthContext,
    AuthProvider
};