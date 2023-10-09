import './style.css';
import { Link } from 'react-router-dom';

const Produtos = () => {
    return (
        <div>
            <div className='title'>
                <h1>Lista de Produtos</h1>
            </div>
            <div className='list'>
                <Link to="/produto/15432135">Produto 1</Link>
                <Link to="/produto/23459873">Produto 2</Link>
                <Link to="/produto/51234532">Produto 5</Link>
            </div>
        </div>
    );
};

export default Produtos;