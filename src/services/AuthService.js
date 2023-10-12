import api from './Api';

const loginUserApi = (userValues) => 
    api.post('/auth/login', userValues)
    .then((response) => response)
    .catch((error) => console.log("Erro: " + error));


const registerUserApi = (addUserValues) =>
    api.post('/user/create', addUserValues)
    .then((response) => response)
    .catch((error) => console.log("Erro: " + error));

const getUserById = (idUser) => 
    api.get(`/user/findById/${idUser}`)
    .then((response) => response)
    .catch((error) => console.log("Erro: " + error));

export {
    loginUserApi,
    registerUserApi,
    getUserById
};