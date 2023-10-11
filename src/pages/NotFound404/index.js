import React from 'react'
import { Link } from 'react-router-dom';

const NotFound404 =() => {
  return (
    <div className='m-8 mt-32'>
      <section className='title-page'>
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">Página não encontrada</h1>
      </section>
      <section className='footer-page mt-10'>
        <Link to="/">
          <button className='inline-block text-sm mx-4 px-6 py-3 leading-none border rounded text-white border-red-400 bg-red-600 hover:bg-red-500 transition duration-500 mt-4 lg:mt-0'>Voltar</button>
        </Link>
      </section>
    </div>
  )
}

export default NotFound404;