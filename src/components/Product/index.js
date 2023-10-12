import React from 'react'


const Product = ({ product }) => {
  return (
    <div className='border border-slate-300 p-2 rounded-md scale-100 w-60 m-5 transition duration-300 hover:shadow-xl hover:scale-110 flex flex-col'>
      <p className='flex flex-row items-center h-6 text-left text-sm bg-yellow-100 border border-yellow-400 rounded px-2 w-fit text-xs text-yellow-600'>Fast</p>
      <img src={ product.imagem } alt='fast-chicken' className='py-2 h-56' />
      <h3 className='flex flex-row justify-center font-semibold'>{ product.nome }</h3>
      <p className='flex my-2 text-sm'>{ product.descricao }</p>
      <h2 className='flex justify-center py-2 font-bold'>$ { product.precoUnitario }</h2>
      <button className='bg-yellow-400 rounded-sm py-2'>Comprar</button>
    </div>
  )
}

export default Product