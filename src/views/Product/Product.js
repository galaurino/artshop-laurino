import React from "react"
import { useParams } from "react-router-dom";
import NavBar from '../../components/navBar/NavBar.js';
import ItemDetailContainer from '../../components/itemDetailContainer/ItemDetailContainer.js';

export default function Product () {
	const {productId} = useParams()
	return (
		<>
		<NavBar />
		<ItemDetailContainer productId={+productId} />
		</>
		)
}