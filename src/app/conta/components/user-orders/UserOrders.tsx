"use client"
import { Title } from "@/app/components/title/Title"
import { AxiosHttpHelper } from "@/helpers/axios-http-helper"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { Order } from "./components/Order"

type Product = {
	id: string
	name: string
	price: number
}

type UserOrder = {
	id: string
	status: 'canceled' | 'pending' | 'accepted' | 'done'
	products: Product[]
	createdAt: string
	updatedAt: string
}

export function UserOrders() {
	const [orders, setOrders] = useState<UserOrder[]>([])

	const loadOrders = async () => {
		try {
			const orders = await AxiosHttpHelper.request<UserOrder[]>({
				method: "GET",
				url: "/orders",
			})

			setOrders(orders || [])
		} catch (error) {
			toast.error("Erro ao carregar pedidos")
		}
	}

	useEffect(() => {
		loadOrders()
	}, [])

	return (
		<div className="flex flex-col h-full text-secondary-950/70">
			<div>
				<Title level={1}>Seus pedidos</Title>
			</div>
			<div className="overflow-y-auto h-full min-h-0 max-h-[80vh] p-1 lg:p-5">
				{orders.length <= 0
					? <div>Nenhum pedido encontrado</div>
					: orders.map(order => (
						<Order
							key={order.id + order.status}
							status={order.status}
							createdAt={order.createdAt}
							products={order.products}
						/>
					))
				}
			</div>
		</div>
	)
}