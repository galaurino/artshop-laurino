import './ItemList.css'
import Item from '../item/Item.js';

function ItemList({prod}) {
	return(
		<>
		<div className="ItemList">
		{prod.map((product) => 
				<Item product={product} key={product.id} />
			)}
		</div>
		</>
		)
}

export default ItemList;