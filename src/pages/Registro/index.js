import { useNavigate } from 'react-router-dom';
import './style.css';

const Registro = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        console.log(data);
        navigate('/login', {state: 'Usuário cadastrado com sucesso!' });
    };

    return (
        <div>
            <h1>Registro de usuário</h1>
            <form onSubmit={ handleSubmit }>
                <div className="form-control">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" name="nome"/>
                </div>

                <div className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" />
                </div>

                <div className="form-control">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" name="senha" autoComplete="current-password" />
                </div>

                <div className="form-control">
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    );
};

export default Registro;