import { DetailedHTMLProps, HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type CheckoutItemHeaderProps = {
	name: string
	price: number | string
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function CheckoutItemHeader({ name, price, className, ...rest }: CheckoutItemHeaderProps) {
	return (
		<div {...rest} className={twMerge("flex justify-between", className)}>
			<span className="text-3xl text-accent-950 font-black">{name}</span>
			<span className="text-lg text-secondary-950/70 font-black">{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} R$</span>
		</div>
	)
}
