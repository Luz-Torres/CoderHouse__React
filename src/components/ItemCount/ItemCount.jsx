import { useState, useEffect } from "react";

const Contador = () => {
    const [contador, setContador] = useState(1);

    useEffect(() => {
        document.title = `Contador: ${contador} `;

    }, [contador])

    const incrementar = () => {
        setContador(contador + 1);
    }

    const decrementar = () => {
        setContador(contador - 1);
    }

    return (
        <div>
            <button onClick={decrementar}> - </button>
            <strong> {contador} </strong>
            <button onClick={incrementar}> + </button>
        </div>
    )
}

export default Contador