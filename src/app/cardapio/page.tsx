import { ProductCard } from "../components/product-card/ProductCard"
import { FilterSection } from "./components/filter-section/FilterSection"

export default function Menu() {
  // Talvez um lazy scroll
  // Filtros podem ficar em cima da grid dos produtos, usar o componenete Button prar isso com um X para remover

  return (
    <div className="px-20 pb-10 grid grid-cols-12 gap-2">
      <FilterSection />
      {/* <div className="flex flex-wrap col-span-10"> */}
      <div className="grid grid-cols-5 gap-4 col-span-10">
        {/* <ProductCard className="mr-3 mb-3" price={32.56} productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} /> */}
        <ProductCard price={32.56} productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
      </div>
    </div>
  )
}
