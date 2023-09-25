import { Title } from "../title/Title"
import { Review } from "./components/Review"

export function CustomersReviewSection() {
  return (
    <div className="px-20 mb-20">
      <Title level={3} className="text-center">
        Avaliações de Clientes
      </Title>
      <div className="flex justify-center">
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  )
}
