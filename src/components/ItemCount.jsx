import { useState, useEffect } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const registrarClick = (operacion) =>{
        if (operacion === "-" && count > 0) {
            setCount(count-1);
        } else if (operacion === "+" && count < stock){
            setCount(count+1);
        }
    }

    // const onAdd = () => {
    //     if ((count > 0) && (stock < 12)) {
    //         stock - count;
    //         console.log(stock);
    //     }
    // }

    return ( <>
        <button onClick={() => registrarClick("-")}>-</button>
        {count}
        <button onClick={() => registrarClick("+")}>+</button>
        <h2>El stock disponible es: {stock}</h2>
        <button onClick={() => onAdd(count)}>Add to Cart</button>
    </> );
}
 
export default ItemCount;