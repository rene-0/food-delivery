"use client"
import { CheckoutItem } from "@/app/components/checkout-item-composition"
import { dateFormatter } from "@/helpers/date-formatter"
import DownOutlined from "@ant-design/icons/lib/icons/DownOutlined"
import UpOutlined from "@ant-design/icons/lib/icons/UpOutlined"
import { useState } from "react"
import { OrderStatus } from "./components/OrderStatus"

type Product = {
	id: string
	name: string
	price: number
}

type OrderProps = {
	status: 'canceled' | 'pending' | 'accepted' | 'done'
	createdAt: string
	products: Product[]
}

export function Order({ status, createdAt, products }: OrderProps) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div onClick={() => setIsOpen(oldIsOpen => !oldIsOpen)} className="flex flex-col cursor-pointer p-2 hover:shadow-sm w-full">
			<div className="flex justify-between items-center">
				<div className="flex items-center">
					<OrderStatus status={status} />
					<div className="ml-2 text-2xl lg:text-4xl font-black text-accent-950">125,33 R$</div>
				</div>
				<div className="flex">
					<div className="text-lg lg:text-3xl font-black">{dateFormatter(createdAt)}</div>
					<div className="p-2 flex items-center justify-center ml-2">
						{isOpen ? <UpOutlined /> : <DownOutlined />}
					</div>
				</div>
			</div>
			<div data-active={isOpen} className='overflow-y-auto transition-all ease-in-out duration-300 max-h-0 data-[active=true]:max-h-96'>
				{products.map(product => (
					<CheckoutItem.Root className="hover:shadow-none">
						<CheckoutItem.Header name={product.name} price={product.price} />
						<CheckoutItem.SubHeader ingredients={['Salada', 'Cebola', 'Tomate', 'Hamburger', 'Presunto', 'Queijo']} />
					</CheckoutItem.Root>
				))}
			</div>
		</div>
	)
}