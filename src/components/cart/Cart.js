import React from "react";
import {products} from '../item/ItemProducts.js'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { contexto } from '../customProvider/CustomProvider.js'
import CartDetail from '../cartDetail/CartDetail.js';

function Cart({id, productId}) {
	const navigate = useNavigate();
	const { cart, emptyCart } = React.useContext(contexto);
	return (
	<>
			{cart.length >= 1
				? (
					<>
					{cart.map((item) => (
						<CartDetail item={item} key={item.id} />
					))}
					<button onClick={() => emptyCart()}>Eliminar todo el carrito.</button>
					</>	
					)
				: <h2 onClick={() => navigate(`/`)}>El carrito está vacio. ¡Clickea aquí para ver los productos!</h2>}
		</>
	)
};

export default Cart;