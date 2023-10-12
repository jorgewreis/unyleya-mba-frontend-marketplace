import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { registerUserApi } from '../../services/AuthService';

const Cadastro = () => {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const handleInputChange = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
      const response = await registerUserApi(inputValues);

      if (response.data) {
        navigate('/login', {state: 'Usuário cadastrado com sucesso!' });
      } else {
        alert('Erro ao cadastrar usuário!');
      }
  };

  return (
    <div className='m-8 mt-32'>
      <section className='title-page'>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Cadastro</h1>
        <form onSubmit={ handleSubmit } className='my-6'>
                <div className="form-control flex flex-col my-2">
                    <label htmlFor="nome" className='pl-2 pb-1 text-sm text-gray-500'>Nome</label>
                    <input type="text" id="nome" name="nome" className='border border-slate-300 rounded-md py-2 px-6 w-80' required onChange={handleInputChange}/>
                </div>

                <div className="form-control flex flex-col my-2">
                    <label htmlFor="email" className='pl-2 pb-1 text-sm text-gray-500'>E-mail</label>
                    <input type="email" id="email" name="email"  className='border border-slate-300 rounded-md py-2 px-6 w-80' required onChange={handleInputChange}/>
                </div>

                <div className="form-control flex flex-col my-2">
                    <label htmlFor="senha" className='pl-2 pb-1 text-sm text-gray-500'>Senha</label>
                    <input type="password" id="senha" name="senha" autoComplete="current-password"  className='border border-slate-300 rounded-md py-2 px-6 w-80' required onChange={handleInputChange}/>
                </div>
                <section className='footer-page mt-10'>
                  <Link to="/">
                    <button className='inline-block text-sm mx-4 px-6 py-3 leading-none border rounded text-white border-red-400 bg-red-600 hover:bg-red-500 transition duration-500 mt-4 lg:mt-0'>Voltar</button>
                  </Link>
                  <button  className='inline-block text-sm mx-4 px-6 py-3 leading-none border rounded text-gray-700 border-yellow-400 bg-yellow-300 text-gray-700 hover:bg-yellow-500 transition duration-500 mt-4 lg:mt-0' type="submit">Cadastrar</button>
                </section>
            </form>
      </section>
      
    </div>
  )
}

export default Cadastro