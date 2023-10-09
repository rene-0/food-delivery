import { Button } from "@/app/components/button/Button"
import { Title } from "@/app/components/title/Title"
import Image from "next/image"
import { CheckoutItem } from "./components/checkout-item/CheckoutItem"

export type CheckoutSummaryProps = {
  active: boolean
  incrementStep: () => void
}

export function CheckoutSummary({ active, incrementStep }: CheckoutSummaryProps) {
  return (
    <div className={`${active ? "w-full" : "w-0 h-0"} flex-shrink-0 overflow-hidden`}>
      <div className="grid grid-cols-2 p-2">
        <div className="p-20 pt-10 relative flex flex-col justify-center items-center">
          {/* Imagem deve mudar conforme o CheckoutItem selecionado */}
          <Image className="w-full h-auto mb-5" width={1000} height={1000} src="/burger.png" alt="" />
          <Title level={2} className="font-black mb-0 text-center text-accent-900/95">
            X-Burger
          </Title>
          <Title level={2} className="font-black">
            18,36 R$
          </Title>
        </div>
        <div className="py-5 px-10 flex flex-col justify-between bg-primary-100 shadow">
          <div className="mb-10">
            <Title className="text-5xl mb-2" level={5}>
              Resumo:
            </Title>
            <div className="overflow-y-auto checkout-items">
              <CheckoutItem id="1" />
              <CheckoutItem id="2" />
              <CheckoutItem id="3" />
              <CheckoutItem id="4" />
              <CheckoutItem id="5" />
              <CheckoutItem id="6" />
              <CheckoutItem id="7" />
              <CheckoutItem id="8" />
              <CheckoutItem id="9" />
            </div>
          </div>
          <div className="flex items-end justify-between mb-2">
            <div className="text-4xl font-black text-accent-950">98,37 R$</div>
            <div>
              <Button onClick={incrementStep}>Continuar</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
