import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, img }) => {
    return (
        <div className='cardProducto'>
            <h3> {nombre} </h3>
            <img src={img} alt={nombre} />
            <p>Precio: {precio} </p>
            <Link to={`/item/${id}`}> Ver + Info </Link>
        </div>
    )
}

export default Item;