import { useEffect, useState } from "react";
import {products} from '../item/ItemProducts.js'
import ItemDetail from '../itemDetail/ItemDetail.js';

const ItemDetailContainer = () => {
	const [item, setItem] = useState(null);

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