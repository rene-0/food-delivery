"use client"
import { createContext, Dispatch, SetStateAction, useState } from "react"

export namespace CheckoutContext {
	export type Delivery = {
		type: "delivery"
		street: string
		number: string
		neighborhood: string
	} | {
		type: "get"
	}

	export type Payment = {
		type: "credit_card",
		cardNumber: string
		holder: string
		expirationDate: string
		cvc: string
	} | {
		type: "on_delivery"
	} | {
		type: "on_establishment"
	} | {
		type: "pix"
	}

	export type Checkout = {
		delivery: Delivery
		payment: Payment
	}
}

type CheckoutContextType = {
	checkout: CheckoutContext.Checkout
	setCheckout: Dispatch<SetStateAction<CheckoutContext.Checkout>>
}

export const CheckoutContext = createContext<CheckoutContextType>({
	checkout: { delivery: { type: 'get' }, payment: { type: 'on_establishment' } },
	setCheckout: () => { }
})

type CheckoutProviderProps = {
	children: React.ReactNode
}

export default function CheckoutProvider({ children }: CheckoutProviderProps) {
	const [checkout, setCheckout] = useState<CheckoutContext.Checkout>({ delivery: { type: 'get' }, payment: { type: 'on_establishment' } })

	return (
		<CheckoutContext.Provider value={{ checkout, setCheckout }}>{children}</CheckoutContext.Provider>
	)
}