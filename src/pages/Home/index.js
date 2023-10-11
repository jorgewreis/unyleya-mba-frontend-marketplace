import React from 'react'
import Banner from '../../assets/banner_001.png'
import ProductList from '../../components/ProductList'
// import Categorias from '../../components/Categorias'

const Home = () => {
  return (    
    <main className='m-8 mt-32'>
      <section className='title-page'>
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">Home</h1>
      </section>
      <section className='flex flex-col items-center justify-center'>
        <img src={ Banner } className='shadow-md rounded-lg border border-slate-300' alt='banner'/>
        
        {/* Categorias */}
        <div></div>

        {/* Lista de produtos */}
        <div className='flex flex-column w-11/12'>
          <ProductList />
        </div>
      </section>
    </main>
  )
}

export default Home