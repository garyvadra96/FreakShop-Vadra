import { useState, useEffect } from "react";

const ItemCount = () => {
    const [count, setCount] = useState(0);
    const [stock, setStock] = useState(12);

    const registrarClick = (operacion) =>{
        if (operacion === "-" && count > 0) {
            setCount(count-1);
            setStock(stock+1)
        } else if (operacion === "+" && count <= 12){
            setCount(count+1);
            setStock(stock-1)
        }
    }

    return ( <>
        <button onClick={() => registrarClick("-")}>-</button>
        {count}
        <button onClick={() => registrarClick("+")}>+</button>
        <h2>El stock disponible es: {stock}</h2>
    </> );
}
 
export default ItemCount;