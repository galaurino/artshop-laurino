import './Item.css'
import React from "react";
import ItemCount from '../itemCount/ItemCount.js';

function Item({product}) {
	return (
	<div className="ItemPresentation">

			<p><img src={product.pictureUrl} alt={product.title} /></p>
			<h1>{product.price}</h1>
			<h2>{product.title}</h2>
			<h3>{product.description}</h3>
			<ItemCount stock={product.stock} initial="1" />

	</div>
	)
};

export default Item;