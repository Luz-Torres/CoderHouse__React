import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <Link to="/">
                <img className='logo' src={"./logo.png"} alt="Logo Planeta" />
            </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink to="categoria/2">Fantasía</NavLink>
                    </li>
                    <li>
                        <NavLink to="categoria/3">Tarot</NavLink>
                    </li>
                    <li>
                        <NavLink to="categoria/4">Juegos</NavLink>
                    </li>
                </ul>
            </nav>

            <CartWidget />
        </header>
    )
}

export default NavBar;