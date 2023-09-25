import { CustomersReviewSection } from "./components/customers-reviews-section/CustomersReviewSection"
import { FastMenuSection } from "./components/fast-menu-section/FastMenuSection"
import { HeroSection } from "./components/hero-section/HeroSection"
import { PopularProducts } from "./components/popular-products/PopularProducts"

export default function Home() {
  return (
    <div className="min-h-full">
      <HeroSection />
      <PopularProducts />
      <FastMenuSection />
      <CustomersReviewSection />
    </div>
  )
}
