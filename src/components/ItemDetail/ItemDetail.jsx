import './ItemDetail.css';
const ItemDetail = ({ id,nombre,autor,publicacion,editorial,precio,stock,img,descripcion}) => {
    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3>ID: {id} </h3>
            <h3>Autor: {autor} </h3>
            <h3>Editorial: {editorial} </h3>
            <h3>Publicacion: {publicacion} </h3>
            <p>{stock}</p>
            <img src={img} alt={nombre} />
            <p> Descripcion: {descripcion} </p>
        </div>
    )
}
export default ItemDetail;