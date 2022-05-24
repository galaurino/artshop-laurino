import React from "react"
import { useParams } from "react-router-dom";
import NavBar from '../../components/navBar/NavBar.js';

export default function Product () {
	const {productId} = useParams()
	return (
		<>
		<NavBar />
		<h1>Carrito</h1>
		</>
		)
}