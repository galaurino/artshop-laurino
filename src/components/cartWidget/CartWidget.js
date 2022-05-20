import cart from './cart.png';
import './CartWidget.css'
import { Link } from "react-router-dom";

function CartWidget() {
	return (
			
		<div className="CartWidget">
			<Link to="/cart">
				<img src={cart} className="CartWidget-logo" alt="Cart" />
			</Link>
		</div>
		
		);
}

export default CartWidget;