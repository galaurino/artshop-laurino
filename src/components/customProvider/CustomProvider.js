import React, { createContext } from "react"

export const contexto = createContext()

const Provider = contexto.Provider

export default function CustomProvider({children}) {
	const [carrito, setCarrito] = React.useState([])

	const addItem = (item,quantity) => {
		
	}

	const emptyCart = ()  => {
		setCarrito ([])
	}

	const valueCart = {
		carrito: carrito,
		setCarrito: setCarrito
	}

	return (
		<Provider value={valueCart}>
			{children}
		</Provider>
	)
}