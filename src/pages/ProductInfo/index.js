import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MdAdd, MdRemove } from 'react-icons/md'
import { findProductById } from '../../services/ProductService'
import { useNavigate } from 'react-router-dom'

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  
  const navigate = useNavigate();

  useEffect(() => {
    getProduct();
  });

  const getProduct = async () => {
    const response = await findProductById(id);
    setProduct(response);
  }

  const addToCart = () => {
    const productCart = [
      {
        ...product,
        quantity: quantity,
      }
    ]
    
    const storagecart = JSON.parse(sessionStorage.getItem('productsCart'));
    if(storagecart) {
      productCart.push(...storagecart);
    }
    sessionStorage.setItem('productsCart', JSON.stringify(productCart));
    navigate('/cart');
  }

  return (
    <main className='m-8 mt-32'>
      <section className='title-page'>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Informações do Produto</h1>
      </section>

      <section className='product-info flex flex-row mt-8'>
        <div className='product-image w-80 mr-8 flex flex-row items-center justify-center'>
          <img src={product.imagem} className='max-h-[250px]' alt='product' />
        </div>

        <div className='product-details flex flex-col'>
          <h2 className='product-name font-semibold text-lg'>{ product.nome }</h2>
          <p className='product-description text-sm mb-6'>{ product.descricao }</p>
          <p className='product-price w-48 text-center text-sm py-1 font-semi bg-yellow-200 rounded-lg'>$ { product.precoUnitario }</p>
          <div className='product-quantity w-48 flex flex-row justify-between mt-2'>
            <div onClick={() => quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)} className='bg-gray-200 rounded-md w-8 h-8 flex flex-row items-center justify-center cursor-pointer'>
            <MdRemove/>
            </div>
            <p className='text-md font-semibold'>{quantity}</p>
            <div onClick={() => quantity === 10 ? setQuantity(10) : setQuantity(quantity + 1)} className='bg-gray-200 rounded-md w-8 h-8 flex flex-row items-center justify-center cursor-pointer'>
              <MdAdd/>
            </div>
          </div>
          <p className='product-total w-48 text-center text-md py-1 font-bold bg-yellow-400 rounded-lg mt-2'>$ { (product.precoUnitario * quantity).toFixed(2) }</p>
          <button onClick={ addToCart } className='product-buy w-48 h-8 mt-6 rounded-md bg-red-600 text-white shadow-md shadow-gray-400'>Adicionar ao carrinho</button>
        </div>
      </section>
    </main>
  )
}

export default ProductInfo