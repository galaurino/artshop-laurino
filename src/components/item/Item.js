import './Item.css'
import React from "react";
import ItemCount from '../itemCount/ItemCount.js';
import { Link, useParams, useNavigate } from 'react-router-dom';

function Item({product}) {
	const {id} = useParams();
	const navigate = useNavigate();
	return (
	<div className="ItemPresentation" onClick={() => navigate(`/product/${product.productId}`)}>
			<p><img src={product.pictureUrl} alt={product.title} /></p>
			<h1>{product.price}</h1>
			<h2>{product.title}</h2>
			<h3>{product.description}</h3>
	</div>
	)
};

export default Item;