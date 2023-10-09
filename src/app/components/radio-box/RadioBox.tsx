"use client"
import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react"
import "./radio-box.css"

type RadioBoxProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  children: ReactNode
  name: string
  id: string
}

export function RadioBox({ children, name, id, ...rest }: RadioBoxProps) {
  return (
    <div aria-disabled={rest.disabled} className="radio-box flex mr-2 mb-2 cursor-pointer">
      <input {...rest} type="radio" name={name} id={id} />
      <div className="marker flex items-center justify-center rounded-full bg-accent-950/95 border-secondary-950/70" />
      <label className="text-secondary-950/70 font-bold text-lg ml-2" htmlFor={id}>
        {children}
      </label>
    </div>
  )
}
