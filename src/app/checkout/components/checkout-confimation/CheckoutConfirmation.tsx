import { Button } from "@/app/components/button/Button"
import { CheckoutItem } from "@/app/components/checkout-item-composition"
import { Title } from "@/app/components/title/Title"
import { OrderItemsContext } from "@/app/context/OrderItemsProvider"
import { AxiosHttpHelper } from "@/helpers/axios-http-helper"
import { useRouter } from "next/navigation"
import { useContext } from "react"
import { toast } from "react-toastify"
import { PaymentTerms } from "./components/PaymentTerms"
import { DeliveryMode } from "./components/delivery-mode/DeliveryMode"

type CheckoutConfirmationProps = {
  active: boolean
  decrementStep: () => void
}

export function CheckoutConfirmation({ active, decrementStep }: CheckoutConfirmationProps) {
  const { orderItems, orderItemsTotal } = useContext(OrderItemsContext)
  const router = useRouter()

  const createOrder = async () => {
    try {
      await AxiosHttpHelper.request({
        method: "POST",
        url: "/orders",
        data: {
          products: orderItems.map(item => ({ id: item.id, quantity: 1 }))
        }
      })
      router.push('./conta')
    } catch (error) {
      toast.error('Falha ao criar pedido')
    }
  }

  return (
    <div className={`${active ? "w-full" : "w-0 h-0"} transition-all overflow-hidden p-1 min-h-[70vh]`}>
      <div className="flex flex-col mb-1 justify-between bg-primary-100 shadow h-full lg:min-w-3xl">
        <div className="py-5 px-2 h-full md:px-10 grid grid-cols-12">
          <div className="overflow-y-auto pb-1 h-full md:pr-2 col-span-12 md:col-span-6 mb-10 md:mb-0">
            {orderItems.map(({ name, price, ingredients }) => (
              <CheckoutItem.Root>
                <CheckoutItem.Header name={name} price={price} />
                <CheckoutItem.SubHeader ingredients={ingredients.map(({ name }) => name)} />
              </CheckoutItem.Root>
            ))}
          </div>
          <div className="md:pl-5 flex flex-col justify-between col-span-12 md:col-span-6">
            <div>
              <div className="mb-8">
                <Title className="mb-5 text-2xl md:text-3xl lg:text-5xl" level={2}>
                  Modo de entrega:
                </Title>
                <DeliveryMode />
              </div>
              <div className="mb-8">
                <Title className="mb-5 text-2xl md:text-3xl lg:text-5xl" level={2}>
                  Condição de pagamento:
                </Title>
                <PaymentTerms />
              </div>
            </div>
            <div>
              <div className="flex items-baseline justify-between">
                <Title className="mb-2 text-4xl lg:text-5xl" level={2}>
                  Total:
                </Title>
                <div className="text-4xl font-black text-accent-950">{orderItemsTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} R$</div>
              </div>
              <div>
                <div className="flex justify-between">
                  <Button className="bg-secondary-950 hover:bg-secondary-950 hover:opacity-50" onClick={decrementStep}>
                    Voltar
                  </Button>
                  <Button onClick={createOrder}>Finalizar</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
