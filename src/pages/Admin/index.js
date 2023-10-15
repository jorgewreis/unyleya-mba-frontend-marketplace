import React, { useState } from 'react'
import { MdEditDocument, MdDelete } from 'react-icons/md'
import { useNavigate, Link } from 'react-router-dom'
import { findAllProducts, deleteProduct } from '../../services/ProductService'
import { useEffect } from 'react'


const Admin = () => {
  const navigate = useNavigate()

  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await findAllProducts()
    setProducts(response)
  }

  const removeProduct = async (id) => {
    const resposta = window.confirm('Deseja realmente excluir este produto?')
    if (!resposta) {
      return
    } else {
      const response = await deleteProduct(id)
      if (response) {
        getProducts()
      }
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <main className='m-8 mt-32'>
      <section className='title-page'>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Admin - Products</h1>
      </section>

      <section className='mt-8'>
        <div className='flex flex-row justify-end'>
          <button className='inline-block text-sm mx-4 px-6 py-3 leading-none border rounded text-white border-red-400 bg-red-600 hover:bg-red-500 transition duration-500 mt-4 lg:mt-0' onClick={() => navigate('/admin/addProduct')}>Add Product</button>
        </div>
        <div className='m-4'>
          <table className='table-auto min-w-full shadow-md'>
            <thead className='justify-between'>
              <tr className='bg-red-100 border-red-600 border-b text-xs'>
                <th className='w-64 px-4 text-start'>
                  <span className='text-gray-700'>Name</span>
                </th>
                <th className='p-2 text-start'>
                  <span className='text-gray-700'>Description</span>
                </th>
                <th className='w-24 px-4 bg-red-300'>
                  <span className='text-gray-700'>Price</span>
                </th>
                <th className='w-48 px-4'>
                  <span className='text-gray-700'>Barcode</span>
                </th>
                <th className='p-2'>
                  <span className='text-gray-700'>Actions</span>
                </th>
              </tr>
            </thead>

            <tbody className='bg-gray-100'>
              { products.map(product => (
                <tr key={ product._id } className='w-full px-6 py-2 border-b border-gray-400'>
                  <th className='w-64 px-4 text-start'>
                    <span className='font-semibold text-sm'>{ product.nome }</span>
                  </th>
                  <th className='p-2 text-start'>
                    <span className='font-normal text-xs'>{ product.descricao }</span>
                  </th>
                  <th className='w-24 px-4 text-right bg-gray-300'>
                    <span className='font-semibold'>$ { product.precoUnitario }</span>
                  </th>
                  <th className='w-48 px-4'>
                    <span className='font-normal text-xs'>{ product.codigodebarras }</span>
                  </th>
                  <th className='w-36 px-4'>
                    <div className='flex flex-row justify-end'>
                    <Link to={`/admin/editProduct/${product._id}`}>
                    <span className='w-8 h-8 mx-2 flex flex-row items-center justify-center border border-red-400 rounded text-red-500 hover:text-white hover:bg-red-500 cursor-pointer transition duration-500'>
                      <MdEditDocument/>
                    </span>
                    </Link>
                    <span  onClick={() => removeProduct(product._id)} className='w-8 h-8 flex flex-row items-center justify-center border border-red-400 rounded text-red-500 hover:text-white hover:bg-red-500 cursor-pointer transition duration-500'>
                      <MdDelete/>
                    </span>
                    </div>
                  </th>
                </tr>
              )
              )}

            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default Admin