import api from './Api';

const sendCart = (order) => 
    api.post('/carrinho/create', order)
        .then((response) => response)
        .catch((error) => {
            console.log(error);
        });

const addOrder = (order) =>
    api.post('/pedido/create', order)
        .then((response) => response)
        .catch((error) => {
            console.log(error);
        });

export { sendCart, addOrder };