import api from './Api';

const addProductApi = (product) =>
    api.post('/product/create', product)
        .then((response) => response)
        .catch((error) => console.log(error));

const findAllProducts = () =>
    api.get('/product/findAll')
        .then((response) => response.data)
        .catch((error) => console.log(error));

const findProductById = (id) =>
    api.get(`/product/find/${id}`)
        .then((response) => response.data)
        .catch((error) => console.log(error));

const updateProduct = (id, productEdit) =>
    api.put(`/product/update/${id}`, productEdit)
        .then((response) => response.data)
        .catch((error) => console.log(error));

const deleteProduct = (id) =>
    api.delete(`/product/delete/${id}`)
        .then((response) => response.data)
        .catch((error) => console.log(error));

export
{
    addProductApi,
    findAllProducts,
    findProductById,
    updateProduct,
    deleteProduct
}
