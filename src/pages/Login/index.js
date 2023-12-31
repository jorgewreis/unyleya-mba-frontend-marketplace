import React from "react";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo_light.png";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const msg = useLocation();
  const navigate = useNavigate();

  const clear = () => {
    const msg = document.querySelector(".cadastro");
    if (msg) {
      msg.remove();
    }
  };
  
  const [inputValues, setInputValues] = useState({
    email: "",
    senha: "",
  });

  const { loginUser } = useContext(AuthContext);

  const handleInputChange = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await loginUser(inputValues);
  };

  return (
    <main className="m-8 mt-32">
      <section className="title-page">
        <img src={Logo} alt="logo" className="w-40 h-40" />
        {msg.state && <p className="cadastro">{msg.state}</p>}
        <form className="my-6" onSubmit={ handleSubmit }>
          <div className="form-control flex flex-col my-2">
            <label htmlFor="email" className="pl-2 pb-1 text-sm text-gray-500">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              onClick={clear}
              className="border border-slate-300 rounded-md py-2 px-6 w-80"
              autoComplete="username"
              required
              onChange={ handleInputChange }
            />
          </div>
          <div className="form-control flex flex-col my-2">
            <label htmlFor="senha" className="pl-2 pb-1 text-sm text-gray-500">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              className="border border-slate-300 rounded-md py-2 px-6 w-80"
              autoComplete="current-password"
              required
              onChange={ handleInputChange }
            />
          </div>
          <section className="footer-page mt-10">
            <button
              className="inline-block text-sm mx-4 px-6 py-3 leading-none border rounded text-white border-red-400 bg-red-600 hover:bg-red-500 transition duration-500 mt-4 lg:mt-0"
              onClick={() => navigate("/login")}
            >
              Voltar
            </button>
            <button
              className="inline-block text-sm mx-4 px-6 py-3 leading-none border rounded border-yellow-400 bg-yellow-300 text-gray-700 hover:bg-yellow-500 transition duration-500 mt-4 lg:mt-0"
              type="submit"
            >
              Entrar
            </button>
          </section>          
        </form>
        <section className="footer-page mt-2">
            <button
              className="inline-block text-sm mx-4 px-6 py-2 leading-none border rounded text-gray-700 hover:bg-gray-100 transition duration-500 mt-4 lg:mt-0"
              onClick={() => navigate("/cadastro")}
            >
              Ainda não tem cadastro? Clique aqui !
            </button>
          </section>
      </section>
    </main>
  );
};

export default Login;