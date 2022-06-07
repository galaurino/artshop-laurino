import React, { createContext } from "react";
export const contexto = createContext();
const Provider = contexto.Provider;

export default function CustomProvider({children}) {
	const [cart, setCart] = React.useState([])

	const addToCart = (prod, count) => {
	    if(isInCart(prod.id)) {
	      const newCart = cart.map(cartItem => {
	        if(cartItem.id === prod.id) {
	          cartItem.quantity++
	        }
	        return cartItem
	      })
	      setCart(newCart)
	    }
	    else {
	      setCart([...cart, {...prod, quantity: +count}])
	    }
	}

	const removeFromCart = (prod, id) => {
		if(isInCart(prod.id)) {
	      const newCart = cart.filter(cartItem => cartItem.id !== id);
   		  setCart(newCart)
	    }
	const newCart = cart.map((cartItem) => {
       if (cartItem.id === prod.id) {
         cartItem.quantity--;
       }
       return cartItem;
     });
     setCart(newCart);

  }

	const emptyCart = ()  => {
		setCart ([])
	}

	 const isInCart = (id) => {
    return cart.find(prod => prod.id === id)
  }

	return (
    <Provider value={{
      addToCart,
      removeFromCart,
      emptyCart,
      isInCart,
      cart,
    }}>{children}</Provider>
  )
}