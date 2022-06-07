import { useState, useContext } from "react";
import React from "react";
import ItemCount from '../itemCount/ItemCount.js';
import { contexto } from '../customProvider/CustomProvider.js'
import { Link, useNavigate } from 'react-router-dom';


function CartDetail({item, product}) {
	const {cart, setCart, removeFromCart} = useContext(contexto)

	return (
		<div className="itemDetail">
			<div className="itemPres" key={item.id}>
				<img src={item.pictureUrl} alt={item.title} />
				<h2>{item.title}</h2>
				<h1>$ {item.price}</h1>
				<h3>{item.longdescription}</h3>
				<button onClick={() => removeFromCart(item.id)}>Eliminar este item.</button>
			</div>
		</div>
		)
};

export default CartDetail;