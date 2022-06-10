import React from "react";
import { useEffect, useState } from "react";
import {products} from '../item/ItemProducts.js'
import ItemDetail from '../itemDetail/ItemDetail.js';
import { getFirestore, doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = ({title}) => {
	const [item, setItem] = useState({});
	React.useEffect(() => {
		const productRef = doc(db, "productos", title)
		const db = getFirestore()
		getDoc(productRef).then((snapshot) => {
			if(snapshot.exists()) {
				setItem({id: snapshot.id, ...snapshot.data()})
			}
		})
	}, [title])

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

	useEffect(() => {
		getItem(products)
			.then((res) => setItem(res))
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			{item
				? (
					<>
					{item.map((item) => (
						<ItemDetail item={item} key={item.id} />
					))}
					</>	
					)
				: "Loading..."}
		</>
	);
}

export default ItemDetailContainer;