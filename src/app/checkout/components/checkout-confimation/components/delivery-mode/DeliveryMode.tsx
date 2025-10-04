import { CheckoutContext } from "@/app/context/CheckoutProvider"
import { useContext } from "react"

export function DeliveryMode() {
	const { checkout } = useContext(CheckoutContext)

	if (checkout.delivery.type === 'delivery') {
		return (
			<div className="grid grid-cols-12 transition-all">
				<div className="flex flex-col col-span-6">
					<label className="text-xl md:text-2xl font-bold">
						Rua:
					</label>
					<span>R. Humaitá</span>
				</div>
				<div className="flex flex-col col-span-6 md:col-span-3">
					<label className="text-xl md:text-2xl font-bold">
						Bairro:
					</label>
					<span>Vila Santa Terezinha</span>
				</div>
				<div className="flex flex-col col-span-6 md:col-span-3">
					<label className="text-xl md:text-2xl font-bold">
						Número:
					</label>
					<span>176</span>
				</div>
			</div>
		)
	}

	return (
		<div>
			<p className="text-2xl font-bold">Retirar no estabelecimento</p>
			<div>
				<p className="text-lg">Esperamos você buscar seu pedido!</p>
				<p>Enviaremos uma mensagem para você quando estiver pronto!</p>
				<p className="text-xl font-bold">R. Humaitá, 176 - Vila Santa Terezinha</p>
			</div>
		</div>
	)
}