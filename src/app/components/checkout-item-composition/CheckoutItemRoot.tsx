"use client"
import { createContext, useState } from "react"

export const CheckoutItemContext = createContext(false)

type CheckoutItemRootProps = {
	children: React.ReactNode
}

export function CheckoutItemRoot({ children }: CheckoutItemRootProps) {
	const [isSelected, setIsSelected] = useState(false)
	console.log('CheckoutItemRoot', isSelected)

	return (
		<CheckoutItemContext.Provider value={isSelected}>
			<div
				onClick={() => setIsSelected((oldIsSelected) => !oldIsSelected)}
				className="checkout-item p-2 mb-3 last:mb-1 hover:bg-primary-50 hover:shadow transition ease-in-out duration-300 cursor-pointer"
			>
				{children}
			</div>
		</CheckoutItemContext.Provider>
	)
}
