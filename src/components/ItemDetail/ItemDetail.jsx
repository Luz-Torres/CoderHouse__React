import './ItemDetail.css';
const ItemDetail = ({nombre,precio,autor,editorial,publicacion,stock,img,descripcion}) => {
    return (
        <article className="contenedorItem">
            <img className='descripcionImg' src={img} alt={nombre} />
            <div className='descripcionTexto'>
                <h2>Nombre: {nombre} </h2>
                <p>Precio: {precio} </p>
                <p>Autor: {autor} </p>
                <p>Editorial: {editorial} </p>
                <p>Publicacion: {publicacion} </p>
                <p>Stock: {stock}</p>
                <p> Descripcion: {descripcion} </p>
            </div>
        </article>
    )
}
export default ItemDetail;