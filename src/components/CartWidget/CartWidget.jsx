import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <Link to="/carrito">
            <div>
                <img className='carrito' src="./public/carrito.jpg" alt="Carrito de compras" />
                <strong>5</strong>
            </div>
        </Link>
    )
}

export default CartWidget;