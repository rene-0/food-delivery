"use client"
import { ReactNode } from "react"
import "./radio-box.css"

type RadioBoxProps = {
  children: ReactNode
  name: string
  id: string
}

export function RadioBox({ children, name, id }: RadioBoxProps) {
  return (
    <div className="flex radio-box mr-2 mb-2">
      <input onChange={() => console.log("changed")} type="radio" name={name} id={id} />
      <div className="marker flex items-center justify-center rounded-full bg-accent-950/95 border-secondary-950/70" />
      <label className="text-secondary-950/70 font-bold text-lg ml-2" htmlFor={id}>
        {children}
      </label>
    </div>
  )
}
