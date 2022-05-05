import './NavBar.css';
import CartWidget from '../cartWidget/CartWidget.js';

function NavBar() {
	return (

			<div className="Nav">
				<ul>
					<li><h1>WildArts</h1></li>
					<li><a href="#">Inicio</a></li>
					<li><a href="#">Comisiones</a></li>
					<li><a href="#">Remeras</a></li>
					<li><a href="#">Posters</a></li>
					<li><a href="#">Tazas</a></li>
					<li><a href="#">Contacto</a></li>
					<li><CartWidget /></li>
				</ul>
			</div>

		);
}

export default NavBar;