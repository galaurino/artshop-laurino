import { useState, useContext } from "react";
import React from "react";
import './ItemDetail.css';
import ItemCount from '../itemCount/ItemCount.js';
import { contexto } from '../customProvider/CustomProvider.js'
import { Link, useNavigate } from 'react-router-dom';


function ItemDetail({item, product}) {
	const navigate = useNavigate();
	const { addToCart, isInCart } = React.useContext(contexto);
	const [quantity, setQuantity] = useState(0);
	const onAdd = (quantityToAdd) => {
		setQuantity(quantityToAdd)
	};

	const {setCart} = useContext(contexto)
	const {cart} = useContext(contexto)

	return (
		<div className="itemDetail">
			<div className="itemPres" key={item.id}>
				<img src={item.pictureUrl} alt={item.title} />
				<h2>{item.title}</h2>
				<h1>$ {item.price}</h1>
				<h3>{item.longdescription}</h3>
				{!isInCart(item.id) ? (
			          <ItemCount initial="1" stock={item.stock} onAdd={() => addToCart(item, quantity)} />
			          ) : (
			            <button onClick={() => navigate(`/cart`)}>Ir al carrito</button>
			        )}
			</div>
		</div>
		)
};

export default ItemDetail;