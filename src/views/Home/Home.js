import NavBar from '../../components/navBar/NavBar.js';
import ItemListContainer from '../../components/itemListContainer/ItemListContainer.js';

export default function Home  () {
	return (
		<>
		<NavBar />
		<div>
			<h1>Inicio</h1>
		</div>
		<ItemListContainer />
		</>
		)
}