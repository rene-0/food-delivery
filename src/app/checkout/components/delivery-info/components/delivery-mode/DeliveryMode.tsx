import { Input } from "@/app/components/input/Input"
import { RadioBox } from "@/app/components/radio-box/RadioBox"
import { Title } from "@/app/components/title/Title"

type DeliveryModeProps = {
  selectedMode: "delivery" | "get"
  onSelect: (mode: "delivery" | "get") => void
}

export function DeliveryMode({ selectedMode, onSelect }: DeliveryModeProps) {
  const isDelivery = selectedMode === "delivery"

  return (
    <div className="mb-5">
      <Title className="text-5xl" level={2}>
        Modo de entrega:
      </Title>
      <div className="grid grid-cols-12 pr-2">
        <div className="col-span-12 lg:col-span-6 mb-2 lg:mb-0">
          <RadioBox onChange={() => onSelect("delivery")} value="delivery" id="delivery" name="receiving_type">
            Entregar no endereço
          </RadioBox>
          <div className={`grid gap-1 grid-cols-12 ${isDelivery ? "" : "opacity-40 grayscale"} transition-all`}>
            <div className="flex flex-col col-span-12">
              <label className="text-2xl font-bold">
                Rua:
              </label>
              <Input disabled={!isDelivery} />
            </div>
            <div className="flex flex-col col-span-6">
              <label className="text-2xl font-bold">
                Bairro:
              </label>
              <Input disabled={!isDelivery} />
            </div>
            <div className="flex flex-col col-span-6">
              <label className="text-2xl font-bold">
                Número:
              </label>
              <Input disabled={!isDelivery} />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:pl-2">
          <RadioBox id="get" onChange={() => onSelect("get")} value="get" name="receiving_type">
            Retirar no estabelecimento
          </RadioBox>
          <div className={`${!isDelivery ? "" : "opacity-40 grayscale"} transition-all`}>
            <p className="font-bold text-xl">Esperamos você buscar seu pedido</p>
            <p className="text-lg">Enviaremos uma mensagem para você quando estiver pronto!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
