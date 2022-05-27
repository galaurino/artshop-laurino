import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import React from "react";
import './ItemDetail.css';
import ItemCount from '../itemCount/ItemCount.js';
import { contexto } from '../customProvider/CustomProvider.js'


function ItemDetail({item, product}) {
	const [quantity, setQuantity] = useState(0);
	const onAdd = (quantityToAdd) => {
		setQuantity(quantityToAdd)
	};

	const {setCarrito} = useContext(contexto)
	const {carrito} = useContext(contexto)

	return (
		<div className="itemDetail">
			<div className="itemPres" key={item.id}>
				<img src={item.pictureUrl} alt={item.title} />
				<h2>{item.title}</h2>
				<h1>$ {item.price}</h1>
				<h3>{item.longdescription}</h3>
				{quantity ?
					<Link to="/cart">
						<button onEvent={(count) => setCarrito(count)}>Ir al Carrito</button>
					</Link>
					:  <ItemCount initial="1" stock={item.stock} onAdd={onAdd} />}
			</div>
		</div>
		)
};

export default ItemDetail;