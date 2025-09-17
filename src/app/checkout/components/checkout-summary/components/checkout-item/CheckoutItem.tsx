"use client"
import { useState } from "react"
import "./checkout-item.css"
import { CheckoutItemCheckbox } from "./components/checkout-item-checkbox/CheckoutItemCheckbox"

type CheckoutItemProps = {
  id: string
}

export function CheckoutItem({ id }: CheckoutItemProps) {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <div
      onClick={() => setIsSelected((old) => !old)}
      className="checkout-item p-2 mb-3 last:mb-1 hover:bg-primary-50 hover:shadow transition ease-in-out duration-300 cursor-pointer"
    >
      <div className="flex justify-between">
        <span className="text-3xl text-accent-950 font-black">X-Burger</span>
        <span className="text-lg text-secondary-950/70 font-black">18,36 R$</span>
      </div>
      <div>
        <span className="text-secondary-950/70">Salada, Cebola, Tomate, Hamburger, Presunto, Queijo</span>
      </div>
      <div className={`accordion ${isSelected ? "open" : "close"} h-0 overflow-hidden`}>
        <CheckoutItemCheckbox name={id} id={`${id}-salada`}>
          Salada
        </CheckoutItemCheckbox>
        <CheckoutItemCheckbox name={id} id={`${id}-cebola`}>
          Cebola
        </CheckoutItemCheckbox>
        <CheckoutItemCheckbox name={id} id={`${id}-tomate`}>
          Tomate
        </CheckoutItemCheckbox>
        <CheckoutItemCheckbox name={id} id={`${id}-hamburger`}>
          Hamburger
        </CheckoutItemCheckbox>
        <CheckoutItemCheckbox name={id} id={`${id}-presunto`}>
          Presunto
        </CheckoutItemCheckbox>
      </div>
    </div>
  )
}
