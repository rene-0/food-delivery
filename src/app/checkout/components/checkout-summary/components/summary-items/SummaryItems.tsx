import { Button } from "@/app/components/button/Button"
import { Title } from "@/app/components/title/Title"
import { OrderItemsContext } from "@/app/context/OrderItemsProvider"
import { useContext } from "react"
import { NoData } from "./components/NoData"
import { SummaryItem } from "./components/SummaryItem"

type SummaryItemsProps = {
	incrementStep: () => void
}

export function SummaryItems({ incrementStep }: SummaryItemsProps) {
	const { orderItems, orderItemsTotal, setOrderItems } = useContext(OrderItemsContext)

	const noItems = orderItems.length <= 0

	const deleteItem = (itemId: string) => {
		setOrderItems(oldOrderItems => oldOrderItems.filter(item => item.id !== itemId))
	}

	const incrementStepWrapper = () => {
		if (noItems) {
			return
		}
		incrementStep()
	}

	return (
		<div className="flex flex-col p-5 mb-1 justify-between bg-primary-100 shadow h-full lg:min-w-3xl">
			<div className="flex shrink flex-col h-full min-h-0">
				<Title className="shrink-0 text-5xl mb-2" level={5}>
					Resumo:
				</Title>
				<div className="shrink overflow-y-auto pb-1 h-full">
					{noItems
						? <NoData />
						: orderItems.map(item => (
							<SummaryItem
								name={item.name}
								price={item.price}
								ingredients={item.ingredients}
								onDelete={() => deleteItem(item.id)}
							/>
						))}
				</div>
			</div>
			<div className="shrink-0 flex flex-col items-center md:items-end md:flex-row justify-between mt-5">
				<div className="text-4xl font-black text-accent-950">{orderItemsTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} R$</div>
				<div>
					<Button disabled={noItems} onClick={incrementStepWrapper}>Continuar</Button>
				</div>
			</div>
		</div>
	)
}