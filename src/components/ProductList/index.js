import React, { useState } from 'react';
import Product from '../Product';
import { findAllProducts } from '../../services/ProductService';
import { useEffect } from 'react';

const ProductList = () => {
    const [categoriaTab, setCategoriaTab] = useState('652bdd54ab454c1cf02e8bed');
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await findAllProducts()
        setProducts(response)
    }

    useEffect(() => {
        getProducts();
    },[])

    return (
        <section className='my-6 text-xl w-full'>
            <div className='flex flex-row justify-center space-x-6 mb-2'>
                <p className={categoriaTab === '652bdd54ab454c1cf02e8bed' ? 'menu-cat-active' : 'menu-cat'} onClick={() => setCategoriaTab('652bdd54ab454c1cf02e8bed')}>Fast Chicken</p>
                <p className={categoriaTab === '652bdd62ab454c1cf02e8bf7' ? 'menu-cat-active' : 'menu-cat'} onClick={() => setCategoriaTab('652bdd62ab454c1cf02e8bf7')}>Combos</p>
                <p className={categoriaTab === '652bdd5bab454c1cf02e8bf2' ? 'menu-cat-active' : 'menu-cat'} onClick={() => setCategoriaTab('652bdd5bab454c1cf02e8bf2')}>Bebidas</p>
            </div>

            <div className='flex flex-row flex-wrap justify-around'>
                {products.map((product) => (
                    (product.categoria[0]._id === categoriaTab ?
                        <Product key={product._id} product={product} />
                        : null)
                ))}
            </div>
        </section>
    )
}

export default ProductList;
