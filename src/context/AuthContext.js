import React, { createContext, useNavigate } from 'react'


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    cons [userLogged, setUserLogged] = useState(false);
    const navigate = useNavigate();

    const loginUser = async (inputValues) => {
        const response = await fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputValues)
            });
        setUserLogged(true);
        navigate('/home');
    }

    return (
        <AuthContext.Provider value={{ userLogged, loginUser }}>
            { children }
        </AuthContext.Provider>
    )
}

export { 
    AuthContext,
    AuthProvider 
};
