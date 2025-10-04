"use client"
import { AxiosHttpHelper } from "@/helpers/axios-http-helper"
import { jwtDecode } from "jwt-decode"
import { useRouter } from "next/navigation"
import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react"
import { toast } from "react-toastify"

type User = {
	accessToken?: string
	email?: string
	name?: string
	phoneNumber?: string
}

type LoginResponse = {
	accessToken?: { token: string }
	email?: string
	name?: string
	phoneNumber?: string
}

type Token = {
	email: string
	exp: number
	iat: number
	id: string
	name: string
	phoneNumber: string
}

type AuthContextType = {
	login: (email: string, password: string) => Promise<void>
	logout: () => void
	setUser: Dispatch<SetStateAction<User | undefined>>
	decodeToken: (token: string) => any
	isAuthenticated: boolean
} & User

export const AuthContext = createContext<AuthContextType>({
	login: async () => { },
	logout: () => { },
	setUser: (user) => { },
	decodeToken: (token) => { },
	isAuthenticated: false
})

type AuthProviderProps = {
	children: React.ReactNode
}

export default function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<User>()
	const router = useRouter()

	const login = async (email: string, password: string) => {
		try {
			const loginResponse = await AxiosHttpHelper.request<LoginResponse>({
				method: "POST",
				url: "/login",
				data: {
					email,
					password
				}
			})
			localStorage.setItem('accessToken', loginResponse?.accessToken?.token || '')
			setUser({
				name: loginResponse?.name,
				email: loginResponse?.email,
				accessToken: loginResponse?.accessToken?.token,
				phoneNumber: loginResponse?.phoneNumber
			})
			router.push('./')
		} catch (error) {
			toast.error("Erro ao fazer login")
		}
	}

	const logout = () => {
		localStorage.removeItem('accessToken')
		setUser(undefined)
	}

	const decodeToken = (token: string) => {
		try {
			const decoded = jwtDecode<Token>(token)
			setUser({
				name: decoded?.name,
				email: decoded?.email,
				accessToken: token,
				phoneNumber: decoded?.phoneNumber
			})
			localStorage.setItem('accessToken', token || '')
		} catch (error) {
			localStorage.removeItem("accessToken")
		}
	}

	useEffect(() => {
		AxiosHttpHelper.registerInterceptors(setUser)
	}, [])

	useEffect(() => {
		const token = localStorage.getItem("accessToken")
		if (!token) {
			localStorage.removeItem("accessToken")
			return
		}
		decodeToken(token)
	}, [])

	return (
		<AuthContext.Provider value={{ ...user, isAuthenticated: !!user?.accessToken, setUser, login, logout, decodeToken }}>{children}</AuthContext.Provider>
	)
}