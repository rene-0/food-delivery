import { CheckoutItem } from "@/app/components/checkout-item-composition"
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined"
import { MouseEvent } from 'react'

type Ingredients = {
	id: string
	name: string
	selected: boolean
}

type SummaryItemProps = {
	name: string
	price: number
	ingredients: Ingredients[]
	onDelete: () => any
}

export function SummaryItem({ name, price, ingredients, onDelete }: SummaryItemProps) {
	const onDeleteWrapper = (event: MouseEvent<HTMLDivElement>) => {
		event.stopPropagation()
		onDelete()
	}
	return (
		<CheckoutItem.Root className="flex">
			<div>
				<CheckoutItem.Header name={name} price={price} />
				<CheckoutItem.SubHeader ingredients={ingredients.map(({ name }) => name)} />
				<CheckoutItem.Ingredients
					ingredients={ingredients.map(ingredient => ({
						...ingredient,
						checked: ingredient.selected
					}))}
				/>
			</div>
			<div onClick={onDeleteWrapper} className="ml-2">
				<div className="flex items-center justify-center w-10 bg-red-600 hover:opacity-50 text-white rounded size-10">
					<DeleteOutlined />
				</div>
			</div>
		</CheckoutItem.Root>
	)
}