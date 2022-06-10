import { useEffect, useState } from "react";
import React from "react";
import ItemList from '../itemList/ItemList.js'
import { getFirestore, getDoc, doc, collection, getDocs, query, where } from "firebase/firestore"

function ItemListContainer({productId}) {
	const [prod, setProd]=useState([])

  React.useEffect(() => {
    const db = getFirestore()

    if(productId){
    const q = query(collection(db, "productos"), where("productId", "==", productId));
    getDocs(q).then((snapshots) => {
      if (snapshots.size === 0) {
        console.log("No hay productos");
      }
      setProd(snapshots.docs.map((doc) => ({id: doc.id, ...doc.data()})));
      });
} else {
  const productsRef = collection(db, "productos");
  getDocs(productsRef).then((snapshots) => {
    if(snapshots.size === 0) {
      console.log("No hay productos.");
    }
    setProd(snapshots.docs.map((doc) => ({id: doc.id, ...doc.data()})))
  })
}

} ,[productId])


   return (
   	<>
       <div className="ItemListContainer">
            <ItemList prod={prod} />
      </div>
    </>
      )
};

export default ItemListContainer;