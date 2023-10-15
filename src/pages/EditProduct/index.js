import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { findProductById, updateProduct } from '../../services/ProductService';

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [productForm, setProductForm] = useState({
    nome: '',
    descricao: '',
    imagem: '',
    precoUnitario: 0,
    codigodebarras: ''
  });

  useEffect(() => {
    getProductById();
  }, []);
  
  const getProductById = async () => {
    const response = await findProductById(id);
    setProductForm(response);
  }

  const handleInputChange = (event) => {
    setProductForm({
      ...productForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await updateProduct(id, productForm);
    if (response) {
      navigate('/admin');
    }
  };

  return (
    <main className='m-8 mt-32'>
        <section className='title'>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Admin - Edit Product</h1>
        </section>
        <form onSubmit={ handleSubmit } className='flex flex-row flex-wrap mt-8 shadow sm:rounded-md sm:overflow-hidden justify-between max-w-screen-xl'>
          <div className='left px-4 py-5 bg-white space-y-6 sm:p-6 w-1/2'>
              <div>
                  <div className='col-span-3 sm:col-span-2'>
                      <label htmlFor='nome' className='label-padrao required'>
                          Nome do produto
                      </label>
                      <div>
                          <input
                              type='text'
                              name='nome'
                              id='nome'
                              className='input-padrao w-80'
                              placeholder='Product Name' required
                              onChange={handleInputChange}
                              value={ productForm.nome }
                          />
                      </div>
                  </div>                        
              </div>
              <div>
                  <label htmlFor='descricao' className='label-padrao'>
                      Descrição do produto
                  </label>
                  <div className='mt-1'>
                      <textarea
                          id='descricao'
                          name='descricao'
                          rows={3}
                          className='input-text-padrao w-full'
                          placeholder='Product Description'
                          onChange={ handleInputChange }
                          value={ productForm.descricao }
                      />
                  </div>
              </div>              
              <div className='grid grid-cols-3 gap-6'>
                  <div className='col-span-3 sm:col-span-2'>
                      <label htmlFor='imagem' className='label-padrao'>
                          Imagem
                      </label>
                      <div>
                          <input
                              type='text'
                              name='imagem'
                              id='imagem'
                              className='input-padrao w-full'
                              placeholder='Image address' required
                              onChange={ handleInputChange }
                              value={ productForm.imagem }                           
                          />
                      </div>
                  </div>
              </div>              
          </div>

          <div className='right left px-4 py-5 bg-white space-y-6 sm:p-6 border-l w-1/2'>
            {/* <div className='flex flex-row justify-between'>
              <div className='col-span-3 sm:col-span-2'>
                  <label htmlFor='categoria' className='label-padrao required'>
                      Categoria
                  </label>
                  <MultiSelect
                    options={categories}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select"
                    isLoading={categories.length === 0}
                    className='w-80'                    
                  />
              </div>                            
            </div> */}

            <div className='flex flex-row justify-between'>
              <div className='col-span-3 sm:col-span-2'>
                  <label htmlFor='precoUnitario' className='label-padrao required'>
                      Preço
                  </label>
                  <div>
                      <input
                          type='number'
                          name='precoUnitario'
                          id='precoUnitario'
                          className='input-padrao w-36 text-right'
                          step='0.01' required
                          onChange={ handleInputChange }
                          value={ parseFloat( productForm.precoUnitario )}
                      />
                  </div>
              </div>
              <div className='col-span-3 sm:col-span-2'>
                  <label htmlFor='codigodebarras' className='label-padrao required'>
                      Barcode
                  </label>
                  <div>
                      <input
                          type='text'
                          name='codigodebarras'
                          id='codigodebarras'
                          className='input-padrao w-48 text-right'
                          placeholder='0000000000-0' required
                          onChange={ handleInputChange }
                          value={ productForm.codigodebarras }
                      />
                  </div>
              </div>
            </div>
            </div>
            <div className='px-4 py-3 bg-gray-200 text-right sm:px-6 w-full'>
                <button
                    type='submit'
                    className='inline-block text-sm mx-4 px-6 py-3 leading-none border rounded text-white border-red-400 bg-red-600 hover:bg-red-500 transition duration-500 mt-4 lg:mt-0'
                >
                    Salvar alterações
                </button>
            </div>
        </form>
    </main>
  )
}

export default EditProduct