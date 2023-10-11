import React, { createContext } from 'react'


const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    cons [userLogged, setUserLogged] = useState(false);
    return (
        <AuthContext.Provider value={{ userLogged }}>
            { children }
        </AuthContext.Provider>
    )
}

export { 
    AuthContext,
    AuthProvider 
};
