import { UserFrom } from "./components/user-form/UserForm"
import { UserOrders } from "./components/user-orders/UserOrders"

export default function Account() {
	return (
		<div className="px-5 text-secondary-950/70 mb-5 min-h-[80vh]">
			<div className="grid grid-cols-12 items-start gap-5 h-full">
				<div className="col-span-12 md:col-span-6 lg:col-span-4 py-5 px-2 sm:p-2 lg:py-5 min:w-5/12 bg-primary-100 shadow-md">
					<UserFrom />
				</div>
				<div className="col-span-12 md:col-span-6 lg:col-span-8 py-5 px-2 sm:p-2 lg:py-5 min:w-5/12 bg-primary-100 shadow-md">
					<UserOrders />
				</div>
			</div>
		</div>
	)
}