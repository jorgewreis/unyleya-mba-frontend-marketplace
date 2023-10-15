import React from 'react'
import { Link } from 'react-router-dom'

const CompletePage = () => {
    return (
        <main className='m-8 mt-32 w-full flex flex-col'>
            <section className='title-page'>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Pedido</h1>
            </section>
          
            {/* informações do produto */}            
            <div className='flex flex-col w-full'>
                <section className='product-info flex flex-col'>
                    <div className='product-image w-80 mr-8 mt-10 mb-4'>
                        <h2>Pedido realizado com sucesso!</h2>
                    </div>
                    <div className='product-details flex flex-col'>
                        <h2 className='product-name font-semibold text-lg'>Obrigado por comprar conosco!</h2>
                        <p className='product-description text-sm mb-6'>Seu pedido será entregue em breve.</p>
                    </div>                
                </section>            

                {/* voltar para a home */}
                <div className='flex flex-row justify-start mt-8'>
                    <Link to='/home'>
                        <button className='bg-yellow-400 rounded-md w-48 h-12 flex flex-row items-center justify-center cursor-pointer'>
                            Voltar para a Home
                        </button>
                    </Link>
                </div>
            </div>

        </main>
    )
}

export default CompletePage