"use client"
import { AxiosHttpHelper } from "@/helpers/axios-http-helper"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { ProductCard } from "../components/product-card/ProductCard"
import { FilterSection } from "./components/filter-section/FilterSection"

type MenuProduct = {
  id: string
  name: string
  price: number
  createdAt: string
  updatedAt: string
}

export default function Menu() {
  const [products, setProducts] = useState<MenuProduct[]>([])

  const loadMenu = async () => {
    try {
      const menuProducts = await AxiosHttpHelper.request<MenuProduct[]>({
        method: "GET",
        url: "/products",
      })
      setProducts(menuProducts || [])
    } catch (error) {
      toast.error("Erro ao buscar produtos")
    }
  }

  useEffect(() => {
    loadMenu()
  }, [])

  return (
    <div className="px-5 xl:px-20 pb-10 grid grid-cols-12 gap-2">
      <div className="col-span-12 lg:col-span-2 xl:col-span-2 pr-3">
        <FilterSection />
      </div>
      <div className="flex flex-wrap col-span-12 lg:col-span-10 xl:col-span-10">
        {products.map(({ id, name, price }) => (
          <ProductCard
            key={id + name}
            price={price}
            className="mr-3 mb-3 shrink grow"
            name={name}
            imageUrl="/burger.png"
            starsPercentageRating={68}
          />
        ))}
      </div>
    </div>
  )
}
