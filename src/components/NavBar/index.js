import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './../../assets/logo_full.png'
import { AuthContext } from '../../context/AuthContext';
import { BiCartDownload } from 'react-icons/bi';
import { MdHome, MdLogout, MdSettings } from 'react-icons/md';


const NavBar = () => {
    const { userLogged, userFull, logoutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <header className='bg-transparent w-full fixed top-0 z-50'>
            <nav className='flex items-center justify-between flex-wrap bg-red-600 p-2 shadow-xl'>
                <div className='flex'>
                    <img src={Logo} alt='logo' className='w-20 ml-10 mr-10' />
                    <div className='flex items-center flex-shrink-0 text-yellow-400 tracking-wide font-title'>
                        <span>King Chicken</span>
                    </div>
                </div>
                { userLogged ? (                    
                    <div className='flex'>
                        <div className='flex flex-row items-center flex-shrink-0 text-yellow-400 tracking-wide text-lg'>                            
                            <button className='flex items-center justify-center rounded text-white w-14 h-14 text-2xl p-2 hover:bg-red-500' onClick={() => navigate('/home') }>
                                <MdHome />
                            </button>
                            
                            <div className='relative flex flex-row'>
                                <button className='flex items-center justify-center rounded text-white w-14 h-14 text-2xl p-2 hover:bg-red-500' onClick={() => navigate('/cart') }>
                                    <BiCartDownload />
                                </button>
                                <div className='absolute top-4 right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-normal leading-none text-red-200 transform translate-x-1/2 -translate-y-1/2 rounded-full'>
                                    0
                                </div>
                            </div>
                            { userFull.admin ? (
                                <div className='flex flex-row items-center'>
                                    <div className='relative flex flex-row'>
                                        <span className='mx-4 text-white text-sm bg-red-500 py-2 px-4 rounded-md cursor-pointer'>{ userFull.nome }</span>
                                    </div>
                                    <div className='relative flex flex-row'>
                                        <button className='flex items-center justify-center rounded text-white w-14 h-14 text-2xl p-2 hover:bg-red-500' onClick={() => navigate('/admin') }>
                                            <MdSettings />
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <span className='mx-4 text-white'>{ userFull.nome }</span>
                            )}
                            <button className='flex items-center justify-center rounded text-white w-14 h-14 text-2xl p-2 hover:bg-red-500' onClick={ logoutUser }>
                                <MdLogout />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='flex'>
                        <button className='inline-block text-sm mx-4 px-6 py-3 leading-none border rounded text-white border-red-400 bg-red-600 hover:bg-red-500 transition duration-500 mt-4 lg:mt-0' onClick={() => navigate('/cadastro')}>Cadastro</button>
                        <button className='inline-block text-sm px-6 py-3 leading-none border rounded text-gray-800 border-yellow-200 bg-yellow-400 hover:border-yellow-400 hover:text-gray-600 hover:bg-yellow-200 transition duration-500 mt-4 mr-6 lg:mt-0 ' onClick={() => navigate('/')}>Entrar</button>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default NavBar;