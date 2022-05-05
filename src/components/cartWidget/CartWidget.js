import cart from './cart.png';
import './CartWidget.css'

function CartWidget() {
	return (
		
		<div className="CartWidget">
			<img src={cart} className="CartWidget-logo" alt="Cart" />
		</div>

		);
}

export default CartWidget;