import { useState, useEffect } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);


    function registrarClick(operacion) {
        if (operacion === "-" && count > 0) {
            setCount(count - 1);
        } else if (operacion === "+" && count < stock) {
            setCount(count + 1);
        }
    }

    return ( <>
        <button onClick={() => registrarClick("-")}>-</button>
        {count}
        <button onClick={() => registrarClick("+")}>+</button>
        <h2>El stock disponible es: {stock}</h2>
        <button onClick={() => onAdd(stock, count)}>Add to Cart</button>
    </> );
}
 
export default ItemCount;