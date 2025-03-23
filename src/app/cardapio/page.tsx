import { ProductCard } from "../components/product-card/ProductCard"
import { FilterSection } from "./components/filter-section/FilterSection"

export default function Menu() {
  // Talvez um lazy scroll
  // Filtros podem ficar em cima da grid dos produtos, usar o componenete Button prar isso com um X para remover

  return (
    <div className="px-5 xl:px-20 pb-10 grid grid-cols-12 gap-2">
      <div className="col-span-12 lg:col-span-3 xl:col-span-3 pr-3">
        <FilterSection />
      </div>
      <div className="flex flex-wrap col-span-12 lg:col-span-9 xl:col-span-9">
        <ProductCard price={32.56} className="mr-3 mb-3 shrink grow" productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} className="mr-3 mb-3 shrink grow" productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} className="mr-3 mb-3 shrink grow" productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} className="mr-3 mb-3 shrink grow" productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} className="mr-3 mb-3 shrink grow" productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} className="mr-3 mb-3 shrink grow" productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} className="mr-3 mb-3 shrink grow" productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} className="mr-3 mb-3 shrink grow" productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} className="mr-3 mb-3 shrink grow" productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} className="mr-3 mb-3 shrink grow" productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} className="mr-3 mb-3 shrink grow" productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} className="mr-3 mb-3 shrink grow" productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} className="mr-3 mb-3 shrink grow" productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} className="mr-3 mb-3 shrink grow" productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
        <ProductCard price={32.56} className="mr-3 mb-3 shrink grow" productName="X-Burger" imageUrl="/burger.png" starsPercentageRating={68} />
      </div>
    </div>
  )
}
