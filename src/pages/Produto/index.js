import { Outlet, useParams } from 'react-router-dom';
import './style.css';

const Produto = () => {
    const { id } = useParams();

    return (
        <div>
            <div className='title'>
                <h2>Produto</h2>
            </div>
            <div className='id'>
                <p>ID { id }</p>
            </div>
            <Outlet />
        </div>
    );
};

export default Produto;