import './style.css';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return (
        <nav>
            <div className="nav-menu__item">
                <Link to="/">Home</Link>
            </div>
            <div className="nav-menu__item">
                <Link to="/login">Login</Link>
            </div>
            <div className="nav-menu__item">
                <Link to="/dashboard">Dashboard</Link>
            </div>
            <div className="nav-menu__item">
                <Link to="/produtos">Produtos</Link>
            </div>
        </nav>
    );
};

export default NavMenu;