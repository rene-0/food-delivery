import { Button } from "../button/Button"
import { ProductCard } from "../product-card/ProductCard"
import { Title } from "../title/Title"
import { CategoryItem } from "./components/CategoryItem"

export function FastMenuSection() {
  return (
    <div className="mb-5">
      <Title level={3} className="text-center">
        Cardápio Rápido
      </Title>
      <div className="flex justify-center flex-wrap mb-5">
        <CategoryItem>Lacnhes</CategoryItem>
        <CategoryItem>Salgados</CategoryItem>
        <CategoryItem>Saladas</CategoryItem>
        <CategoryItem>Proções</CategoryItem>
        <CategoryItem>Pizzas</CategoryItem>
        <CategoryItem>Pasteis</CategoryItem>
        <CategoryItem>Sucos</CategoryItem>
        <CategoryItem>Refrigerantes</CategoryItem>
        <CategoryItem>Bebidas</CategoryItem>
        <CategoryItem>Doces</CategoryItem>
      </div>
      <div className="flex justify-center flex-wrap lg:px-20">
        <ProductCard className="mr-2 my-2 lg:mr-5 lg:my-5" imageUrl="/burger.png" price={18.36} productName="X-Burger" starsPercentageRating={55} />
        <ProductCard className="mr-2 my-2 lg:mr-5 lg:my-5" imageUrl="/burger.png" price={18.36} productName="X-Burger" starsPercentageRating={55} />
        <ProductCard className="mr-2 my-2 lg:mr-5 lg:my-5" imageUrl="/burger.png" price={18.36} productName="X-Burger" starsPercentageRating={55} />
        <ProductCard className="mr-2 my-2 lg:mr-5 lg:my-5" imageUrl="/burger.png" price={18.36} productName="X-Burger" starsPercentageRating={55} />
        <ProductCard className="mr-2 my-2 lg:mr-5 lg:my-5" imageUrl="/burger.png" price={18.36} productName="X-Burger" starsPercentageRating={55} />
        <ProductCard className="mr-2 my-2 lg:mr-5 lg:my-5" imageUrl="/burger.png" price={18.36} productName="X-Burger" starsPercentageRating={55} />
        <ProductCard className="mr-2 my-2 lg:mr-5 lg:my-5" imageUrl="/burger.png" price={18.36} productName="X-Burger" starsPercentageRating={55} />
        <ProductCard className="mr-2 my-2 lg:mr-5 lg:my-5" imageUrl="/burger.png" price={18.36} productName="X-Burger" starsPercentageRating={55} />
        <ProductCard className="mr-2 my-2 lg:mr-5 lg:my-5" imageUrl="/burger.png" price={18.36} productName="X-Burger" starsPercentageRating={55} />
        <ProductCard className="mr-2 my-2 lg:mr-5 lg:my-5" imageUrl="/burger.png" price={18.36} productName="X-Burger" starsPercentageRating={55} />
        <ProductCard className="mr-2 my-2 lg:mr-5 lg:my-5" imageUrl="/burger.png" price={18.36} productName="X-Burger" starsPercentageRating={55} />
        <ProductCard className="mr-2 my-2 lg:mr-5 lg:my-5" imageUrl="/burger.png" price={18.36} productName="X-Burger" starsPercentageRating={55} />
        <ProductCard className="mr-2 my-2 lg:mr-5 lg:my-5" imageUrl="/burger.png" price={18.36} productName="X-Burger" starsPercentageRating={55} />
        <ProductCard className="mr-2 my-2 lg:mr-5 lg:my-5" imageUrl="/burger.png" price={18.36} productName="X-Burger" starsPercentageRating={55} />
        <ProductCard className="mr-2 my-2 lg:mr-5 lg:my-5" imageUrl="/burger.png" price={18.36} productName="X-Burger" starsPercentageRating={55} />
        <ProductCard className="mr-2 my-2 lg:mr-5 lg:my-5" imageUrl="/burger.png" price={18.36} productName="X-Burger" starsPercentageRating={55} />
        <ProductCard className="mr-2 my-2 lg:mr-5 lg:my-5" imageUrl="/burger.png" price={18.36} productName="X-Burger" starsPercentageRating={55} />
        <ProductCard className="mr-2 my-2 lg:mr-5 lg:my-5" imageUrl="/burger.png" price={18.36} productName="X-Burger" starsPercentageRating={55} />
      </div>
      <div className="p-5 flex justify-center items-center">
        <Button>Ver mais</Button>
      </div>
    </div>
  )
}
