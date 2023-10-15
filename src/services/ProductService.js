import api from './Api';

const addProductApi = (product) =>
    api.post('/product/create', product)
        .then((response) => response)
        .catch((error) => console.log(error));

export
{
    addProductApi
}
