import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUserApi, getUserById } from "../services/AuthService";
import Api from "../services/Api";

const useAuth = () => {
    const [userLogged, setUserLogged] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userFull, setUserFull] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
        if(userInfo) {
            Api.defaults.headers.common['Authorization'] = `Bearer ${userInfo.token}`;
            findUserById(userInfo.id);
            setUserLogged(true);            
            <Link to='/home' /> 
        } else {
            setUserLogged(false);
            <Link to='/' />
        }
        setLoading(false);
    }, []);

    const loginUser = async (inputValues) => {
        const response = await loginUserApi(inputValues);
        const data = await response.data;
        sessionStorage.setItem('userInfo', JSON.stringify(data));
        Api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        setUserLogged(true);
        navigate('/home');
    }

    const logoutUser = () => {
        sessionStorage.removeItem('userInfo');
        setUserLogged(false);
        navigate('/');
    }

    const findUserById = async (idUser) => {
        const response = await getUserById(idUser);
        await setUserFull(response.data);
    }

    return { userLogged, loading, userFull, loginUser, logoutUser };
}

export default useAuth;