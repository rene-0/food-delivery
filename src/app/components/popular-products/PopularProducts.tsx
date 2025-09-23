"use client"

import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons"
import { useEffect } from "react"
import { Button } from "../button/Button"
import { ProductCard } from "../product-card/ProductCard"
import { Title } from "../title/Title"
import "./popular-products.css"

export function PopularProducts() {
  useEffect(() => {
    let mouseDown = false
    let startX = 0
    let scrollLeft = 0

    const slider = document.getElementById("popular-products-container")
    if (!slider) {
      return
    }

    slider.scrollLeft = slider.clientWidth / 4

    const startDragging = (event: MouseEvent) => {
      mouseDown = true
      startX = event.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    }

    const stopDragging = () => {
      mouseDown = false
    }

    const move = (event: MouseEvent) => {
      event.preventDefault()
      if (!mouseDown) {
        return
      }
      const x = event.pageX - slider.offsetLeft
      const scroll = x - startX
      slider.scrollLeft = scrollLeft - scroll
    }

    const setUpScrollWithDrag = () => {
      slider.addEventListener("mousemove", move, false)
      slider.addEventListener("mousedown", startDragging, false)
      slider.addEventListener("mouseup", stopDragging, false)
      slider.addEventListener("mouseleave", stopDragging, false)
    }

    setUpScrollWithDrag()

    return () => {
      slider.removeEventListener("mousemove", move, false)
      slider.removeEventListener("mousedown", startDragging, false)
      slider.removeEventListener("mouseup", stopDragging, false)
      slider.removeEventListener("mouseleave", stopDragging, false)
    }
  }, [])

  return (
    <div>
      <Title level={3} className="text-center">
        Produtos populares
      </Title>
      <div className="relative">
        <div className="hidden absolute left-0 top-0 z-30 h-full w-40 sm:flex items-center justify-center bg-gradient-to-r from-primary-200 from-30% via-primary-200/70 via-70% to-transparent to-100%">
          <Button className="mr-0 p-2 rounded-full bg-accent-950">
            <ArrowLeftOutlined />
          </Button>
        </div>
        <div id="popular-products-container" className="flex mb-5 overflow-x-auto w-full cursor-grab">
          <ProductCard
            className="mr-5 first:ml-36 last:mr-36 my-5"
            price={18.36}
            name="X-Burger"
            imageUrl="/burger.png"
            starsPercentageRating={50}
          />
          <ProductCard
            className="mr-5 first:ml-36 last:mr-36 my-5"
            price={18.36}
            name="X-Burger"
            imageUrl="/burger.png"
            starsPercentageRating={50}
          />
          <ProductCard
            className="mr-5 first:ml-36 last:mr-36 my-5"
            price={18.36}
            name="X-Burger"
            imageUrl="/burger.png"
            starsPercentageRating={50}
          />
          <ProductCard
            className="mr-5 first:ml-36 last:mr-36 my-5"
            price={18.36}
            name="X-Burger"
            imageUrl="/burger.png"
            starsPercentageRating={50}
          />
          <ProductCard
            className="mr-5 first:ml-36 last:mr-36 my-5"
            price={18.36}
            name="X-Burger"
            imageUrl="/burger.png"
            starsPercentageRating={50}
          />
          <ProductCard
            className="mr-5 first:ml-36 last:mr-36 my-5"
            price={18.36}
            name="X-Burger"
            imageUrl="/burger.png"
            starsPercentageRating={50}
          />
          <ProductCard
            className="mr-5 first:ml-36 last:mr-36 my-5"
            price={18.36}
            name="X-Burger"
            imageUrl="/burger.png"
            starsPercentageRating={50}
          />
          <ProductCard
            className="mr-5 first:ml-36 last:mr-36 my-5"
            price={18.36}
            name="X-Burger"
            imageUrl="/burger.png"
            starsPercentageRating={50}
          />
          <ProductCard
            className="mr-5 first:ml-36 last:mr-36 my-5"
            price={18.36}
            name="X-Burger"
            imageUrl="/burger.png"
            starsPercentageRating={50}
          />
          <ProductCard
            className="mr-5 first:ml-36 last:mr-36 my-5"
            price={18.36}
            name="X-Burger"
            imageUrl="/burger.png"
            starsPercentageRating={50}
          />
        </div>
        <div className="hidden absolute right-0 top-0 z-30 h-full w-40 sm:flex items-center justify-center bg-gradient-to-l from-primary-200 from-30% via-primary-200/70 via-70% to-transparent to-100%">
          <Button className="mr-0 p-2 rounded-full bg-accent-950">
            <ArrowRightOutlined />
          </Button>
        </div>
      </div>
    </div>
  )
}
