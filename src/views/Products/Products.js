import React from "react"
import { useParams } from "react-router-dom";
import ItemListContainer from '../../components/itemListContainer/ItemListContainer.js';

export default function Product () {
	const {productId} = useParams()
	return (
		<>
		<ItemListContainer productId={productId} />
		</>)
}