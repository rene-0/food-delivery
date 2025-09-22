"use client"
import { useContext } from "react"
import { CheckoutItemContext } from "../CheckoutItemRoot"
import "./checkout-item.css"
import { CheckoutItemCheckbox } from "./components/checkout-item-checkbox/CheckoutItemCheckbox"

type Ingredient = {
	id: string
	name: string
	checked: boolean
}

type CheckoutItemIngredientsProps = {
	ingredients: Ingredient[]
}

export function CheckoutItemIngredients({ ingredients }: CheckoutItemIngredientsProps) {
	const isSelected = useContext(CheckoutItemContext)

	return (
		<div className={`accordion ${isSelected ? "open" : "close"} h-0 overflow-hidden`}>
			{ingredients.map(({ id, name, checked }) => (
				<CheckoutItemCheckbox id={`${id}-${name}`} key={`${id}-${name}`} name={id} checked={checked}>{name}</CheckoutItemCheckbox>
			))}
		</div>
	)
}
