import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const useAuth = () => {
    const [userLogged, setUserLogged] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = sessionStorage.getItem('userInfo');
        if(userInfo) {
            setUserLogged(true);
            console.log('Usuário logado!');
            <Link to='/home' /> 
        } else {
            setUserLogged(false);
            console.log('Usuário não logado!');
            <Link to='/login' />
        }
        setLoading(false);
    }, []);

    const loginUser = async (inputValues) => {
        const response = await fetch('http://localhost:27017/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputValues)
            });
        const data = await response.json();
        sessionStorage.setItem('userInfo', JSON.stringify(data));

        setUserLogged(true);
        navigate('/home');
    }

    const logoutUser = () => {
        sessionStorage.removeItem('userInfo');
        setUserLogged(false);
        console.log('Usuário desconectado!');
        navigate('/login');
    }

    return { userLogged, loading, loginUser, logoutUser };
}

export default useAuth;