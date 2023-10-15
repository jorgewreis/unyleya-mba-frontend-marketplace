import React, { useState, useEffect } from 'react'
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { sendCart, addOrder } from './../../services/OrderService';

const Cart = () => {
    const [productsCart, setProductsCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [frete] = useState(15);
    const [address, setAddress] = useState({
        cep: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: ''
    });
    
    useEffect(() => {
        const storageCart = JSON.parse(sessionStorage.getItem('productsCart'));
        if (!storageCart) {
            return;
        }
        setProductsCart(storageCart);
        const total = storageCart.reduce((valor, product) => {
            return valor + (product.precoUnitario * product.quantity)
        }, 0)
        setTotalPrice(total)
    }, []);
    
    const searchAddress = async (event) => {
        const { value } = event.target;
        setAddress({
            ...address,
            cep: value
        })
        if (value.length === 8) {
            await findAddress(value)
        }
    }

    const removeItem = (id) => {
        const storageCart = JSON.parse(sessionStorage.getItem('productsCart'));
        const filterCart = storageCart.filter((product) => product._id !== id);
        sessionStorage.setItem('productsCart', JSON.stringify(filterCart));
        setProductsCart(filterCart);
        const total = filterCart.reduce((valor, product) => {
            return valor + (product.precoUnitario * product.quantity)
        }, 0)
        setTotalPrice(total)
    }

    const findAddress = async (cep) => {
        axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
            setAddress({
                ...address,                
                logradouro: `${response.data.logradouro}`,
                bairro: `${response.data.bairro}` + ' - ' + `${response.data.localidade}` + '/' + `${response.data.uf}`
            })
        })        
    }

    const handleChangeValues = (event) => {
        setAddress({
            ...address,
            [event.target.name]: event.target.value
        })
    }

    const sendOrder = async () => {
        const productsOrder = productsCart.map((product) => {
            return {
                id: product._id,
                quantity: product.quantity
            }
        })
        const cardInfo = {
            products: productsOrder,
            frete: frete,
            precoTotal: totalPrice,
            address: address
        }
        const response = await sendCart(cardInfo);
        if (response) {
            const order = {
                produtos: response.data.produtos,
                frete: response.data.frete,
                precoTotal: response.data.precoTotal,
                status: 'Pendente'
            }
            const responseOrder = await addOrder(order);
            if (responseOrder) {
                sessionStorage.removeItem('productsCart');
                window.location.href = '/complete';
            }
        }
    }

    return (
        <main className='m-8 mt-32'>
        <section className='title-page'>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Carrinho</h1>
        </section>

        <div className='flex flex-row justify-between mt-8 w-full'>            
            <section className='address flex flex-col w-100 pr-8 border-r '>
                <h2 className='text-xl font-semibold'>Alterar Endereço</h2>
                <form className='my-4'>
                    <div className='flex flex-col space-y-3'>
                        <input className='border border-gray-300 rounded-md p-2 w-36' type='text' placeholder='CEP' id='cep' name='cep' onChange={ searchAddress }/>
                    </div>
                    <div className='flex flex-col space-y-3 mt-4'>
                        <input className='border border-gray-300 rounded-md p-2 w-80' type='text' placeholder='Logradouro' id='logradouro' name='logradouro' value={ address.logradouro } onChange={ handleChangeValues }/>
                    </div>
                    <div className='flex flex-col space-y-3 mt-4'>
                        <input className='border border-gray-300 rounded-md p-2 w-24' type='number' placeholder='Número' id='numero' name='numero' onChange={ handleChangeValues }/>
                    </div>
                    <div className='flex flex-col space-y-3 mt-4'>
                        <input className='border border-gray-300 rounded-md p-2 w-80' type='text' placeholder='Complemento' id='complemento' name='complemento' onChange={ handleChangeValues }/>
                    </div>
                    <div className='flex flex-col space-y-3 mt-4'>
                        <input className='border border-gray-300 rounded-md p-2 w-60' type='text' placeholder='Bairro' id='bairro' name='bairro' value={ address.bairro } onChange={ handleChangeValues }/>
                    </div>
                </form>
                
                {/* endereço de entrega cadastrado */}
                <div className='mt-8'>
                    <h2 className='text-xl font-semibold'>Endereço de Entrega</h2>
                    <p className='text-sm'>{ address.logradouro + ', ' + address.numero + ' - ' + address.complemento }</p>
                    <p className='text-sm'>{ address.bairro }</p>
                </div>
            </section>

            <section className='products-cart flex flex-col w-full mx-8'>
                <div className='products-cart-header flex flex-row justify-between border-b-2 border-gray-500'>
                    <h2 className='text-xl font-semibold'>Produtos</h2>
                    <h2 className='text-xl font-semibold'>Preço</h2>
                </div>
                <div className='products-cart-items'>
                    {productsCart.map((product, index) => (
                        <div key={index} className='product-cart-item flex flex-row items-center justify-between border-b border-gray-400 py-2'>
                            <div className='product-cart-item-details flex flex-row w-3/4'>
                                <div className='product-cart-item-description flex flex-col'>
                                    <h3 className='font-semibold'>{product.nome}</h3>
                                    <p className='text-sm'>{product.descricao}</p>
                                </div>
                            </div>
                            <div className='product-cart-item-price flex flex-col w-1/4 items-end justify-end'>
                                <p className='text-xs'>{product.quantity} x $ {product.precoUnitario}</p>
                                <p className='text-md font-bold'>$ { (product.precoUnitario * product.quantity).toFixed(2) }</p>
                            </div>
                            <span onClick={() => removeItem(product._id) } className='w-8 h-8 ml-4 flex flex-row items-center justify-center border border-red-600 rounded text-red-600 hover:text-white hover:bg-red-600 cursor-pointer transition duration-500'>
                                <MdDelete/>
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </div>

        <div className='flex flex-row justify-end mt-8 mr-8'>
            <div className='flex flex-col w-1/4'>
                <div className='flex flex-row justify-between'>
                    <p className='text-sm'>Subtotal</p>
                    <p className='text-sm'>$ {totalPrice.toFixed(2)}</p>
                </div>
                <div className='flex flex-row justify-between'>
                    <p className='text-sm'>Frete</p>
                    <p className='text-sm'>$ { frete.toFixed(2)}</p>
                </div>
                <div className='flex flex-row justify-between'>
                    <p className='text-sm'>Total</p>
                    <p className='text-sm'>$ { (totalPrice + frete).toFixed(2)}</p>
                </div>
            </div>
        </div>

        <div className='flex flex-row justify-end mt-8 mr-8'>
            <button onClick={ sendOrder } className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Finalizar Compra</button>
        </div>

        </main>
    )
}

export default Cart