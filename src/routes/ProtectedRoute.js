import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { userLogged } = useContext(AuthContext);

    if (userLogged) {
        return children;
    } else {
        return <Navigate to='/' />
    }
}

export default ProtectedRoute