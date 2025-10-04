import { CheckCircleFilled, ClockCircleFilled, PauseCircleFilled } from "@ant-design/icons"
import CloseCircleFilled from "@ant-design/icons/lib/icons/CloseCircleFilled"

type OrderStatusProps = {
	status: 'canceled' | 'pending' | 'accepted' | 'done'
}

export function OrderStatus({ status }: OrderStatusProps) {
	switch (status) {
		case 'canceled':
			return <div title="Não conseguimos completar seu pedido" className="font-black text-lg lg:text-3xl text-red-700"><CloseCircleFilled /></div>
		case 'pending':
			return <div title="Seu pedido está na espera para aceitação" className="font-black text-lg lg:text-3xl text-yellow-700"><PauseCircleFilled /></div>
		case 'accepted':
			return <div title="Seu pedido foi aceito e está sendo feito" className="font-black text-lg lg:text-3xl text-green-700"><ClockCircleFilled /></div>
		default:
			return <div title="Seu pedido foi entregue" className="font-black text-lg lg:text-3xl"><CheckCircleFilled /></div>
	}
}