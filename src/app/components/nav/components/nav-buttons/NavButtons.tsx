"use client"
import { Button } from "@/app/components/button/Button"
import { AuthContext } from "@/app/context/AuthProvide"
import ShoppingOutlined from "@ant-design/icons/lib/icons/ShoppingOutlined"
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined"
import Link from "next/link"
import { useContext } from "react"

export function NavButtons() {
	const { isAuthenticated } = useContext(AuthContext)

	return (
		<div className="flex items-center mt-auto mb-0">
			<Link className=" mr-10" href="./checkout">
				<Button className="text-white p-0 h-10 w-10 rounded-full bg-accent-950">
					<ShoppingOutlined />
				</Button>
			</Link>
			<div>
				{isAuthenticated ? (
					<Link href="./conta">
						<Button className="text-white p-0 h-10 w-10 rounded-full bg-accent-950">
							<UserOutlined />
						</Button>
					</Link>
				) : (
					<Link className="text-lg text-white font-semibold mr-0 py-2 px-8 rounded-full cursor-pointer bg-accent-950  drop-shadow-md" href="/login">
						Entrar
					</Link>
				)}
			</div>
		</div>
	)
}