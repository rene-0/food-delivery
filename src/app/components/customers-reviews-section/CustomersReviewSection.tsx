import { Title } from "../title/Title"
import { Review } from "./components/Review"

export function CustomersReviewSection() {
  return (
    <div className="px-0 lg:px-20 mb-10">
      <Title level={3} className="text-center">
        Avaliações de Clientes
      </Title>
      <div className="flex justify-center flex-wrap">
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  )
}
