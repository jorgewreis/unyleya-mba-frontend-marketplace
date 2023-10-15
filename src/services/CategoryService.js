import api from './Api';

const findAllCategories = () => 
    api.get('/categoria/findAll')
        .then(response => response.data)
        .catch(error => console.log(error));

export { 
    findAllCategories
}