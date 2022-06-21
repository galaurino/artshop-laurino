import React from "react"
import { useParams } from "react-router-dom";
import NavBar from '../../components/navBar/NavBar.js';
import ItemListContainer from '../../components/itemListContainer/ItemListContainer.js';

export default function Product () {
	const {title} = useParams()
	return (
		<>
		<NavBar />
		<ItemListContainer title={title} />
		</>)
}