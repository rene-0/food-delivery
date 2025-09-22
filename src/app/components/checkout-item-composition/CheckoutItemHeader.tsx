type CheckoutItemHeaderProps = {
	name: string
	price: number | string
}

export function CheckoutItemHeader({ name, price }: CheckoutItemHeaderProps) {
	return (
		<div className="flex justify-between">
			<span className="text-3xl text-accent-950 font-black">{name}</span>
			<span className="text-lg text-secondary-950/70 font-black">{price} R$</span>
		</div>
	)
}
