type CheckoutItemSubHeaderProps = {
	ingredients: string[]
}

export function CheckoutItemSubHeader({ ingredients }: CheckoutItemSubHeaderProps) {
	return (
		<div>
			<span className="text-secondary-950/70">{ingredients.join(', ')}</span>
		</div>
	)
}
