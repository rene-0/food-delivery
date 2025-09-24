"use client"
import { createContext, DetailedHTMLProps, HTMLAttributes, useState } from "react"
import { twMerge } from "tailwind-merge"

export const CheckoutItemContext = createContext(false)

type CheckoutItemRootProps = {
	children: React.ReactNode
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function CheckoutItemRoot({ children, ...rest }: CheckoutItemRootProps) {
	const [isSelected, setIsSelected] = useState(false)

	return (
		<CheckoutItemContext.Provider value={isSelected}>
			<div
				{...rest}
				onClick={() => setIsSelected((oldIsSelected) => !oldIsSelected)}
				className={twMerge("checkout-item p-2 mb-3 last:mb-1 hover:bg-primary-50 hover:shadow transition ease-in-out duration-300 cursor-pointer", rest.className)}
			>
				{children}
			</div>
		</CheckoutItemContext.Provider>
	)
}
