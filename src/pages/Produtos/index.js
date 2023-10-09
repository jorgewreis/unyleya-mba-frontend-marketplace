import './style.css';
import { Link, useSearchParams } from 'react-router-dom';

const Produtos = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div>
            <div className='title'>
                <h1>Lista de Produtos</h1>
            </div>
            <div className='pagex'>
                <p>Página { searchParams.get('pagex') }</p>
            </div>
            <div className='list'>
                <Link to="/produto/15432135">Produto 1</Link>
                <Link to="/produto/23459873">Produto 2</Link>
                <Link to="/produto/51234532">Produto 5</Link>
            </div>
            <ul className='pagination'>
                <li onClick={() => setSearchParams({pagex: 1}) }><div className='page'>1</div></li>
                <li onClick={() => setSearchParams({pagex: 2}) }><div className='page'>2</div></li>
                <li onClick={() => setSearchParams({pagex: 3}) }><div className='page'>3</div></li>
                <li onClick={() => setSearchParams({pagex: 4}) }><div className='page'>4</div></li>
                <li onClick={() => setSearchParams({pagex: 5}) }><div className='page'>5</div></li>
            </ul>
        </div>
    );
};

export default Produtos;