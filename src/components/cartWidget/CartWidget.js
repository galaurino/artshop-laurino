import React from "react"
import carrito from './carrito.png';
import './CartWidget.css'
import { Link } from "react-router-dom";
import { contexto } from '../customProvider/CustomProvider.js'

function CartWidget() {
	const { cart } = React.useContext(contexto);
	const cartLength = (count) => {
    	return cart.find(prod => prod.count === count)
 	}
	
	return (
		<>
		{cart.length >= 1 ? (
			<div className="CartWidget">
				<Link to="/cart">
					<img src={carrito} className="CartWidget-logo" alt="Cart" />
					<span className="badge">
          				{cart.length}
        			</span>
				</Link>
			</div>
			) : ('')}
		</>
		);
}

export default CartWidget;