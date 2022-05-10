import React from "react";
import ItemCount from '../itemCount/ItemCount.js';

function ItemListContainer({greeting}) {
	return (
		<>
		<p>{greeting}</p>
		<ItemCount initial="1" stock="8" />
		</>
		);
};

export default ItemListContainer;