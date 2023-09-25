import { PlusOutlined } from "@ant-design/icons"
import Image from "next/image"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import { Button } from "../button/Button"
import { ProductStars } from "./components/product-stars/ProductStars"

type ProductCardProps = ComponentProps<"div"> & {
  price: number
  productName: string
  imageUrl: string
  starsPercentageRating: number
}

export function ProductCard({ productName, price, starsPercentageRating, imageUrl, ...rest }: ProductCardProps) {
  return (
    <div
      style={{ width: 250 }}
      className={twMerge("flex flex-col items-center shrink-0 p-5 bg-primary-200 shadow-lg rounded cursor-pointer", rest.className)}
    >
      <Image src={imageUrl} alt="burger" width={300} height={300} />
      <p className="text-3xl font-black text-accent-950">{productName}</p>
      <ProductStars starsPercentageRating={starsPercentageRating} />
      <p className="text-3xl font-black text-secondary-950/50">{price} R$</p>
      <div className="flex items-center mt-2">
        <Button className="text-secondary-500 bg-primary-200 hover:text-white border-accent-950 border-2 hover:bg-accent-950 h-10 w-10 p-0 rounded-full mr-5 ease-in-out duration-300">
          <PlusOutlined />
        </Button>
        <Button className="text-lg text-white font-semibold mr-0 py-2 px-8 rounded-full cursor-pointer bg-accent-950 drop-shadow-md">Comprar</Button>
      </div>
    </div>
  )
}
