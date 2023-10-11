import React, { useContext, useNavigate } from 'react'
import Logo from './../../assets/logo_full.png'
import { AuthContext } from '../../context/AuthContext';

const NavBar = () => {
    const { userLogged } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <header className='bg-transparent w-full fixed top-0'>
            <nav className='flex items-center justify-between flex-wrap bg-red-600 p-2 shadow-xl'>
                <div className='flex'>
                    <img src={Logo} alt='logo' className='w-20 ml-10 mr-10' />
                    <div className='flex items-center flex-shrink-0 text-yellow-400 tracking-wide font-title'>
                        <span>King Chicken</span>
                    </div>
                </div>
                <div className='flex'>
                    <button className='inline-block text-sm mx-4 px-6 py-3 leading-none border rounded text-white border-red-400 bg-red-600 hover:bg-red-500 transition duration-500 mt-4 lg:mt-0' onClick={() => navigate('/cadastro')}>Cadastro</button>
                    <button className='inline-block text-sm px-6 py-3 leading-none border rounded text-gray-800 border-yellow-200 bg-yellow-400 hover:border-yellow-400 hover:text-gray-600 hover:bg-yellow-200 transition duration-500 mt-4 mr-6 lg:mt-0 ' onClick={() => navigate('/login')}>Entrar</button>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;