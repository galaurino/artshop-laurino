import NavBar from '../../components/navBar/NavBar.js';
import ItemListContainer from '../../components/itemListContainer/ItemListContainer.js';
import { useParams } from 'react-router-dom';

export default function Category() {
	const {category} = useParams();


	return (
		<div>
			<NavBar />
			<h1>ksdgjksa</h1>
			<ItemListContainer category={category} />
		</div>
			)
}