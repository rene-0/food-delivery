"use client"
import { AxiosHttpHelper } from "@/helpers/axios-http-helper"
import { jwtDecode } from "jwt-decode"
import { useRouter } from "next/navigation"
import { createContext, useEffect, useState } from "react"
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
	isAuthenticated: boolean
} & User

export const AuthContext = createContext<AuthContextType>({
	login: async () => { },
	logout: () => { },
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

	useEffect(() => {
		AxiosHttpHelper.api.interceptors.response.use(
			(response) => response,
			async (error) => {
				const originalRequest = error.config

				if (error.response?.status === 401 && !originalRequest._retry) {
					try {
						originalRequest._retry = true
						const { data } = await AxiosHttpHelper.api.post("/refresh-token")
						const newToken = data.accessToken.token

						localStorage.setItem("accessToken", newToken)

						console.log('AxiosHttpHelper.api', AxiosHttpHelper.api)
						console.log('originalRequest', originalRequest)

						return AxiosHttpHelper.api(originalRequest)
					} catch (err) {
						localStorage.removeItem("accessToken")
						setUser(undefined)
						return Promise.reject(err)
					}
				}


				return Promise.reject(error)
			}
		)

		AxiosHttpHelper.api.interceptors.request.use((config) => {
			const token = localStorage.getItem("accessToken")
			if (token) {
				config.headers.Authorization = `Bearer ${token}`
			}
			return config
		})
	}, [])

	useEffect(() => {
		const token = localStorage.getItem("accessToken")
		if (!token) {
			return
		}
		try {
			const decoded = jwtDecode<Token>(token)
			setUser({
				name: decoded?.name,
				email: decoded?.email,
				accessToken: token,
				phoneNumber: decoded?.phoneNumber
			})
		} catch (error) {
			localStorage.removeItem("accessToken")
		}
	}, [])

	return (
		<AuthContext.Provider value={{ ...user, isAuthenticated: !!user?.accessToken, login, logout }}>{children}</AuthContext.Provider>
	)
}