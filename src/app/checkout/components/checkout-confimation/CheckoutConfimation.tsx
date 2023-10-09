import { Button } from "@/app/components/button/Button"
import { Title } from "@/app/components/title/Title"
import { CheckoutConfirmationItem } from "./components/checkout-confirmation-item/CheckoutConfirmationItem"

type CheckoutConfirmationProps = {
  active: boolean
  decrementStep: () => void
  incrementStep: () => void
}

export function CheckoutConfirmation({ active, decrementStep, incrementStep }: CheckoutConfirmationProps) {
  return (
    <div className={`${active ? "w-full" : "w-0 h-0"} flex-shrink-0 overflow-hidden pb-2 bg-primary-100 shadow`}>
      <div className="py-5 px-10 grid grid-cols-2">
        <div className="checkout-items pr-2 overflow-y-auto">
          <CheckoutConfirmationItem />
          <CheckoutConfirmationItem />
          <CheckoutConfirmationItem />
          <CheckoutConfirmationItem />
          <CheckoutConfirmationItem />
          <CheckoutConfirmationItem />
          <CheckoutConfirmationItem />
          <CheckoutConfirmationItem />
        </div>
        <div className="pl-5 flex flex-col justify-between">
          <div>
            <div className="mb-5">
              <Title className="mb-2 text-5xl" level={2}>
                Modo de entrega:
              </Title>
              <div className="grid grid-cols-12 transition-all">
                <div className="flex flex-col col-span-6">
                  <label className="text-2xl font-bold" htmlFor="">
                    Rua:
                  </label>
                  <span>R. Humaitá</span>
                </div>
                <div className="flex flex-col col-span-3">
                  <label className="text-2xl font-bold" htmlFor="">
                    Bairro:
                  </label>
                  <span>Vila Santa Terezinha</span>
                </div>
                <div className="flex flex-col col-span-3">
                  <label className="text-2xl font-bold" htmlFor="">
                    Número:
                  </label>
                  <span>176</span>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <Title className="mb-2 text-5xl" level={2}>
                Condição de pagamento:
              </Title>
              <div className="grid grid-cols-12 transition-all">
                <div className="flex flex-col col-span-6">
                  <label className="text-2xl font-bold" htmlFor="">
                    Número do cartão:
                  </label>
                  <span>9999 9999 9999 9999</span>
                </div>
                <div className="flex flex-col col-span-3">
                  <label className="text-2xl font-bold" htmlFor="">
                    Validade:
                  </label>
                  <span>12/29</span>
                </div>
                <div className="flex flex-col col-span-3">
                  <label className="text-2xl font-bold" htmlFor="">
                    CVC:
                  </label>
                  <span>123</span>
                </div>
                <div className="flex flex-col col-span-12">
                  <label className="text-2xl font-bold" htmlFor="">
                    Nome do titular:
                  </label>
                  <span>Renê Nunes Colombaro</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <Title className="mb-2" level={2}>
                Total:
              </Title>
              <div className="text-4xl font-black text-accent-950">98,37 R$</div>
            </div>
            <div>
              <div className="flex justify-between">
                <Button onClick={decrementStep}>Voltar</Button>
                <Button onClick={incrementStep}>Pagar</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
