import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { findCategoryById } from './../../services/CategoryService';

const Product = ({ product }) => {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState(''); // Use useState to store the category name

  const getCategoria = async () => {
    for (let i = 0; i < product.categoria.length; i++) {
      var responseId = await findCategoryById(product.categoria[0]._id);
      if (responseId) {
        setCategoria(responseId.nome); // Set the category name when you get a response
        break;
      }
    }
  }

  useEffect(() => {
    getCategoria();
  }, []);

  return (
    <div key={product._id} className='border border-slate-300 p-2 rounded-md scale-100 w-60 m-5 transition duration-300 hover:shadow-xl hover:scale-110 flex flex-col'>
      <p className='flex flex-row items-center h-6 text-left text-sm bg-yellow-100 border border-yellow-400 rounded px-2 w-fit text-xs text-yellow-600'>
        {categoria}
      </p>
      <div className='flex flex-row items-center justify-center py-4'>
        <img src={product.imagem} alt='fast-chicken' className='max-h-[200px] max-w-[200px] h-auto w-auto rounded-md' />
      </div>
      <h3 className='flex flex-row justify-center font-semibold'>{product.nome}</h3>
      <p className='flex mx-2 my-2 text-sm'>{product.descricao}</p>
      <h2 className='flex justify-center py-2 font-bold'>$ {product.precoUnitario}</h2>
      <button onClick={() => navigate(`/product/${product._id}`)} className='bg-yellow-400 rounded-sm py-2'>Comprar</button>
    </div>
  );
}

export default Product;
