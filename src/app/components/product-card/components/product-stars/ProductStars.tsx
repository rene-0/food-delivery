import { StarFilled } from "@ant-design/icons"
import "./product-stars.css"

type ProductStarsProps = {
  starsPercentageRating: number
}

export function ProductStars({ starsPercentageRating }: ProductStarsProps) {
  return (
    <div className="product-stars relative">
      <div className="absolute flex z-10">
        <StarFilled className="text-accent-950/40 text-xl" />
        <StarFilled className="text-accent-950/40 text-xl" />
        <StarFilled className="text-accent-950/40 text-xl" />
        <StarFilled className="text-accent-950/40 text-xl" />
        <StarFilled className="text-accent-950/40 text-xl" />
      </div>
      <div style={{ width: `${starsPercentageRating}%` }} className="flex overflow-hidden absolute z-20">
        <StarFilled className="text-accent-950 text-xl" />
        <StarFilled className="text-accent-950 text-xl" />
        <StarFilled className="text-accent-950 text-xl" />
        <StarFilled className="text-accent-950 text-xl" />
        <StarFilled className="text-accent-950 text-xl" />
      </div>
    </div>
  )
}
