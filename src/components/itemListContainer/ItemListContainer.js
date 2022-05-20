import { useEffect, useState } from "react";
import React from "react";
import ItemList from '../itemList/ItemList.js'
import {products} from '../item/ItemProducts.js'

function ItemListContainer({id}) {
	const [prod, setProd]=useState([])

  React.useEffect(() => {
    if(id){
      setProd(products.filter(item  => item.id == +id));
    }
    else{
      setProd(products);
    }
  }, [id])

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
   	<>
       <div className="ItemListContainer">
            <ItemList prod={products} />
      </div>
    </>
      )
};

export default ItemListContainer;