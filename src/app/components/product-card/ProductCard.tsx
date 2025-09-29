import { PlusOutlined } from "@ant-design/icons"
import Image from "next/image"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import { Button } from "../button/Button"
import { ProductStars } from "./components/product-stars/ProductStars"
import "./product-card.css"

type ProductCardProps = ComponentProps<"div"> & {
  price: number
  name: string
  imageUrl: string
  starsPercentageRating: number
  onAdd: () => any
  onBuy: () => any
}

export function ProductCard({ name, price, starsPercentageRating, imageUrl, onAdd, onBuy, ...rest }: ProductCardProps) {
  return (
    <div
      {...rest}
      className={twMerge("product-card text-xl lg:text-3xl flex flex-col items-center shrink-0 p-5 bg-primary-200 shadow-lg rounded max-w-64", rest.className)}
    >
      <Image src={imageUrl} alt="burger" width={300} height={300} />
      <p title={name} className="font-black text-accent-950 truncate w-full">{name}</p>
      <ProductStars starsPercentageRating={starsPercentageRating} />
      <p className="font-black text-secondary-950/50">{price} R$</p>
      <div className="flex items-center mt-2">
        <Button onClick={onAdd} className="text-secondary-500 bg-primary-200 hover:text-white border-accent-950 border-2 hover:bg-accent-950 h-10 w-10 p-0 rounded-full mr-1 lg:mr-5 ease-in-out duration-300">
          <PlusOutlined />
        </Button>
        <Button onClick={onBuy} className="px-4 lg:px-8">Comprar</Button>
      </div>
    </div>
  )
}
