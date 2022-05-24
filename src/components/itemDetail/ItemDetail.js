import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import './ItemDetail.css';
import ItemCount from '../itemCount/ItemCount.js';


function ItemDetail({item, product}) {
	const [quantity, setQuantity] = useState(0);
	const onAdd = (quantityToAdd) => {
		setQuantity(quantityToAdd)
	};

	return (
		<div className="itemDetail">
			<div className="itemPres" key={item.id}>
				<img src={item.pictureUrl} alt={item.title} />
				<h2>{item.title}</h2>
				<h1>$ {item.price}</h1>
				<h3>{item.longdescription}</h3>
				{quantity ?
					<Link to="/cart">
						<button>Ir al Carrito</button>
					</Link>
					:  <ItemCount initial="1" stock={item.stock} onAdd={onAdd} />}
			</div>
		</div>
		)
};

export default ItemDetail;