import React, { useState } from "react";

function ItemCount({initial, stock, onAdd}) {
	const [count, setCount] = useState(Number(initial));
	const onIncrement = () => {
		if (count>=stock){
			alert("Has excedido el stock disponible.")
		}else {
			setCount(count + 1)
		}
	};
	const onSubtract = () => {
		if (count<=initial){
			alert("No puedes tener menos cantidad.");
		}else {
			setCount(count - 1)
		};
	};

	return (
		<div className="ItemCount">

		<button onClick={onSubtract}>-</button>

		{count}

		<button onClick={onIncrement}>+</button>

		<button onClick={() => onAdd(count)}>Agregar al Carrito</button>

		</div>
		);
	};

export default ItemCount;