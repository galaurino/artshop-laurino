import './NavBar.css';
import CartWidget from '../cartWidget/CartWidget.js';
import {  Link, NavLink } from "react-router-dom";

const categories = [
 { url: "clothing", label: "Clothing"},
 { url: "mugs", label: "Mugs"},
 { url: "prints", label: "Prints"},
 { url: "commissions", label: "Commissions"}
];

function NavBar() {
	return (
		<>
			<div className="NavBar">
				<Link to="/"><h1>WildArts</h1></Link>
				<div className="Navigation">
					{categories.map(({url, label}) =>(
							<NavLink key={url} to={`/category/${url}`}>
								{label}
							</NavLink>
						))}
				</div>
				<Link to="/cart">
					<CartWidget />
				</Link>
				</div>
		</>

		);
}

export default NavBar;