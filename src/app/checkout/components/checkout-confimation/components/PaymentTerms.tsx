import { CheckoutContext } from "@/app/context/CheckoutProvider"
import { useContext } from "react"

export function PaymentTerms() {
	const { checkout } = useContext(CheckoutContext)

	switch (checkout.payment.type) {
		case 'credit_card':
			return (
				<div className="grid grid-cols-12 transition-all">
					<div className="flex flex-col col-span-12 lg:col-span-6">
						<label className="text-xl md:text-2xl font-bold">
							Número do cartão:
						</label>
						<span>{checkout.payment.cardNumber}</span>
					</div>
					<div className="flex flex-col col-span-6 lg:col-span-3">
						<label className="text-xl md:text-2xl font-bold">
							Validade:
						</label>
						<span>{checkout.payment.expirationDate}</span>
					</div>
					<div className="flex flex-col col-span-3">
						<label className="text-xl md:text-2xl font-bold">
							CVC:
						</label>
						<span>{checkout.payment.cvc}</span>
					</div>
					<div className="flex flex-col col-span-12">
						<label className="text-xl md:text-2xl font-bold">
							Nome do titular:
						</label>
						<span>{checkout.payment.holder}</span>
					</div>
				</div>
			)
		case 'on_establishment':
			return (
				<div>
					<p className="font-bold text-xl">Pagar no estabelecimento</p>
					<div>
						<label className="text-lg">Pagar com a gente ao receber o pedido</label>
						<p>Temos a maquina de cartão no estabelecimento e também aceitamos transferência por pix!</p>
					</div>
				</div>
			)
		case 'pix':
			return (
				<div>
					<p className="font-bold text-xl">Pagar com pix QRCode</p>
					<div>
						<label className="text-lg">Pagar com o entregador</label>
						<p>Não se preocupe, nossos entregadores levarão a maquina de cartão 😊</p>
					</div>
				</div>
			)

		default:
			//On delivery
			return (
				<div>
					<p className="font-bold text-xl">Pagar na entrega</p>
					<div>
						<label className="text-lg">Pagar com o entregador</label>
						<p>Não se preocupe, nossos entregadores levarão a maquina de cartão 😊</p>
					</div>
				</div>
			)
	}
}