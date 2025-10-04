"use client"
import { createContext, Dispatch, SetStateAction, useState } from "react"

type Ingredients = {
	id: string
	name: string
	selected: boolean
}

type OrderItem = {
	id: string
	name: string
	price: number
	ingredients: Ingredients[]
}

type OrderItemsContextType = {
	orderItems: OrderItem[]
	setOrderItems: Dispatch<SetStateAction<OrderItem[]>>
	orderItemsTotal: number
}

export const OrderItemsContext = createContext<OrderItemsContextType>({
	orderItems: [],
	setOrderItems: () => { },
	orderItemsTotal: 0
})

type OrderItemsProviderProps = {
	children: React.ReactNode
}

export default function OrderItemsProvider({ children }: OrderItemsProviderProps) {
	const [orderItems, setOrderItems] = useState<OrderItem[]>([])
	const prices = orderItems.map(item => item.price)
	const orderItemsTotal = prices.length > 0 ? prices.reduce((previousValue, currentValue) => previousValue + currentValue) : 0

	return (
		<OrderItemsContext.Provider value={{ orderItems, orderItemsTotal, setOrderItems }}>{children}</OrderItemsContext.Provider>
	)
}