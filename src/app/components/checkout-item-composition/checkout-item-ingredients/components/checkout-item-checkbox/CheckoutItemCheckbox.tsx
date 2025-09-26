import { ReactNode } from "react"
import "./checkout-item-checkbox.css"

type CheckoutItemCheckboxProps = {
  children: ReactNode
  id: string
  name: string
  checked: boolean
}

export function CheckoutItemCheckbox({ id, name, children, checked }: CheckoutItemCheckboxProps) {
  return (
    <div className="checkout-item-checkbox inline-block m-2 first:ml-0">
      <input type="checkbox" checked={checked} name={name} id={id} />
      <label className="font-bold text-lg flex items-center cursor-pointer select-none" htmlFor={id}>
        <div className="marker flex items-center justify-center border-2 text-accent-950 border-accent-950 rounded mr-2" />
        {children}
      </label>
    </div>
  )
}
