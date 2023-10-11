import React, { useState } from 'react';
import Product from '../Product';
import productMock from '../../mock/product';

const ProductList = () => {
    const [categoriaTab, setCategoriaTab] = useState('Fast');

    const [products, setProducts] = useState(productMock);

    return (
        <section className='my-6 text-xl w-full'>
            <div className='flex flex-row justify-center space-x-6 mb-2'>
                <p className={categoriaTab === 'Fast' ? 'menu-cat-active' : 'menu-cat'} onClick={() => setCategoriaTab('Fast')}>Fast</p>
                <p className={categoriaTab === 'Combos' ? 'menu-cat-active' : 'menu-cat'} onClick={() => setCategoriaTab('Combos')}>Combos</p>
                <p className={categoriaTab === 'Bebidas' ? 'menu-cat-active' : 'menu-cat'} onClick={() => setCategoriaTab('Bebidas')}>Bebidas</p>
            </div>

            <div className='flex flex-row flex-wrap justify-around'>
                {productMock.map((product) => (
                    <Product key={product._id} product={product} />
                ))}
            </div>
        </section>
    )
}

export default ProductList;
