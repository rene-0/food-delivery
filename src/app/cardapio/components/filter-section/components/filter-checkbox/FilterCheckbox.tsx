"use client"
import { Button } from "@/app/components/button/Button"
import { ReactNode } from "react"
import "./filter-checkbox.css"

type FilterCheckboxProps = {
  children: ReactNode
  marked: boolean
  onClick: () => void
}

export function FilterCheckbox({ children, marked, onClick }: FilterCheckboxProps) {
  return (
    <Button onClick={onClick} className="flex items-center px-2 mb-2">
      <div data-marked={marked} className="mr-1 bg-white rounded checkmark text-accent-950"></div>
      {children}
    </Button>
  )
}
