import { useState } from "react"
import "./filter-range.css"

export function FilterRange() {
  const [maxPrice, setMaxPrice] = useState(101)

  return (
    <div>
      <input
        value={maxPrice}
        onChange={(price) => setMaxPrice(Number(price.currentTarget.value))}
        min={1}
        max={101}
        className="slider text-accent-950"
        type="range"
      />
      <span className="text-secondary-950/70 text-center font-medium block w-full">{maxPrice === 101 ? "Ilimitado" : `${maxPrice} R$`}</span>
    </div>
  )
}
