import { useLocation } from 'react-router-dom';
import './style.css';

const Login = () => {
    const msg = useLocation();
    console.log(msg);
    
    const clear = () => {
        const msg = document.querySelector('.cadastro');
        if(msg) {
            msg.remove();
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <p className='cadastro'>{ msg.state }</p>
            <form>
                <div className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" onClick={ clear }/>
                </div>
                <div className="form-control">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" />
                </div>
                <div className="form-control">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    );
};

export default Login;