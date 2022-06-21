import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from '../itemDetail/ItemDetail.js';
import { getFirestore, doc, getDoc } from "firebase/firestore"

function ItemDetailContainer ({productId}) {
	const [item, setItem] = useState({});
	React.useEffect(() => {
		const db = getFirestore()
		const productRef = doc(db, "productos", productId)
		getDoc(productRef).then((snapshot) => {
				setItem({id: snapshot.id, ...snapshot.data()})
		});
	}, [productId])

	const getItem = (product) =>
		new Promise ((resolve, reject) => {
			setTimeout(() => {
				if (product) {
					resolve(product);
				}else {
					reject("Algo salió mal.");
				}
			}, 2000);
		});

	return (
		<>

			<ItemDetail item={item} />
			
		</>
	);
}

export default ItemDetailContainer;