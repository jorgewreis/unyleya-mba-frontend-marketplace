import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo_light.png'

const Login = () => {
  const msg = useLocation();
  const navigate = useNavigate();
    
  const clear = () => {
      const msg = document.querySelector('.cadastro');
      if(msg) {
          msg.remove();
      }
  }

  const [inputValues, setInputValues] = useState({
    email: '',
    senha: ''
  });

  const handleInputChange = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValues);
    navigate('/home');
  }

  return (
    <main className='m-8 mt-32'>
      <section className='title-page'>
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">Login</h1>
        <img src={ Logo } alt='logo' className='w-60 h-60'/>
        <p className='cadastro'>{ msg.state }</p>
        <form className='my-6' onSubmit={ handleSubmit }>
            <div className="form-control flex flex-col my-2">
                <label htmlFor="email" className='pl-2 pb-1 text-sm text-gray-500'>E-mail</label>
                <input type="email" id="email" onClick={ clear } className='border border-slate-300 rounded-md py-2 px-6 w-80' required onChange={ handleInputChange }/>
            </div>
            <div className="form-control flex flex-col my-2">
                <label htmlFor="senha" className='pl-2 pb-1 text-sm text-gray-500'>Senha</label>
                <input type="password" id="senha" className='border border-slate-300 rounded-md py-2 px-6 w-80' required onChange={ handleInputChange }/>
            </div>
            <section className='footer-page mt-10'>
              <Link to="/">
                <button className='inline-block text-sm mx-4 px-6 py-3 leading-none border rounded text-white border-red-400 bg-red-600 hover:bg-red-500 transition duration-500 mt-4 lg:mt-0'>Voltar</button>
              </Link>
              <button className='inline-block text-sm mx-4 px-6 py-3 leading-none border rounded text-white border-yellow-400 bg-yellow-300 text-gray-700 hover:bg-yellow-500 transition duration-500 mt-4 lg:mt-0' type="submit">Entrar</button>
            </section>
            <section className='footer-page mt-2'>
              <Link to="/cadastro">
                <button className='inline-block text-sm mx-4 px-6 py-2 leading-none border rounded text-gray-700 hover:bg-gray-100 transition duration-500 mt-4 lg:mt-0'>Ainda não tem cadastro? Clique aqui !</button>
              </Link>
            </section>
        </form>
      </section>
    </main>
  )
}

export default Login