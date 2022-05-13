import { useEffect, useState } from "react";
import ItemList from '../itemList/ItemList.js'
import {products} from '../item/ItemProducts.js'

function ItemListContainer() {
	const [prod, setProd]=useState([])
	let condition = true
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
         if (condition){
         	resolve(products)
         }else{
         	reject('There was an error.')
         }
      }, 2000)
   })

   useEffect(() =>{
   	getProducts
   		.then((res)=> setProd(res))
   		.catch((error)=>console.log(error))
   }, [])

   return (
      <div className="ItemListContainer">
            <ItemList prod={prod} />
      </div>
      )
};

export default ItemListContainer;