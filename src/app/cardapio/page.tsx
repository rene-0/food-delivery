"use client"
import { AxiosHttpHelper } from "@/helpers/axios-http-helper"
import { useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"
import { toast } from "react-toastify"
import { ProductCard } from "../components/product-card/ProductCard"
import { OrderItemsContext } from "../context/OrderItemsProvider"
import { FilterSection } from "./components/filter-section/FilterSection"

type MenuProduct = {
  id: string
  name: string
  price: number
  createdAt: string
  updatedAt: string
}

const IngredientsMock = [
  { id: '1', name: 'Salada', selected: true },
  { id: '2', name: 'Cebola', selected: true },
  { id: '3', name: 'Tomate', selected: true },
  { id: '4', name: 'Hamburger', selected: true },
  { id: '5', name: 'Presunto', selected: true },
  { id: '6', name: 'Queijo', selected: true },
]

export default function Menu() {
  const [products, setProducts] = useState<MenuProduct[]>([])
  const router = useRouter()

  const { setOrderItems } = useContext(OrderItemsContext)

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

  const addToCart = (productId: string) => {
    const product = products.find(product => product.id === productId)
    if (product) {
      setOrderItems(oldOrderItems => ([...oldOrderItems, { id: product.id, name: product.name, price: product.price, ingredients: IngredientsMock }]))
      toast.success(`${product.name} adicionado!`)
    }
  }

  const buyProduct = (productId: string) => {
    const product = products.find(product => product.id === productId)
    if (product) {
      setOrderItems(oldOrderItems => ([...oldOrderItems, { id: product.id, name: product.name, price: product.price, ingredients: IngredientsMock }]))
      router.push('./checkout')
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
            onAdd={() => addToCart(id)}
            onBuy={() => buyProduct(id)}
          />
        ))}
      </div>
    </div>
  )
}
