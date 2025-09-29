"use client"
import { Button } from "@/app/components/button/Button"
import { OrderItemsContext } from "@/app/context/OrderItemsProvider"
import ShoppingOutlined from "@ant-design/icons/lib/icons/ShoppingOutlined"
import { useContext } from "react"
import './checkout-button.css'

export function CheckoutButton() {
	const { orderItems } = useContext(OrderItemsContext)

	const numberOfItems = orderItems.length

	return (
		<div className="checkout-button relative">
			<Button className="text-white p-0 h-10 w-10 rounded-full bg-accent-950">
				<ShoppingOutlined />
			</Button>
			<div className="absolute top-0 -right-1 z-10 flex">
				<span className="absolute inline-flex h-full w-full animate-ping-once duration-700 rounded-full bg-white opacity-75"></span>
				<span className="relative inline-flex items-center justify-center size-4 rounded-full bg-white item-count text-secondary-950 shadow-md font-bold">{numberOfItems}</span>
			</div>
		</div>
	)
}