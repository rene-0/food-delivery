import axios, { AxiosRequestConfig } from "axios"

export class AxiosHttpHelper {
  static readonly api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
  })
  static readonly PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL

  private static isRefreshing = false
  private static refreshSubscribers: ((token: string) => void)[] = []

  static async request<T = any>(request: AxiosHttpHelper.Request): Promise<AxiosHttpHelper.Response<T>> {
    try {
      const response = await AxiosHttpHelper.api.request<T>(request)
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || error.message || "Erro inesperado na requisição"
        throw new Error(message)
      }
      throw error
    }
  }

  static get headers() {
    const accessToken = localStorage.getItem("accessToken")
    return {
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      "Content-Type": "application/json",
    }
  }

  static registerInterceptors(setUser: (u: any) => void) {
    AxiosHttpHelper.api.interceptors.request.use((config) => {
      const token = localStorage.getItem("accessToken")
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    })

    AxiosHttpHelper.api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config

        if (error.response?.status === 401 && !originalRequest._retry) {
          if (AxiosHttpHelper.isRefreshing) {
            return new Promise((resolve) => {
              AxiosHttpHelper.refreshSubscribers.push((token: string) => {
                originalRequest.headers.Authorization = `Bearer ${token}`
                resolve(AxiosHttpHelper.api(originalRequest))
              })
            })
          }

          originalRequest._retry = true
          AxiosHttpHelper.isRefreshing = true

          try {
            const { data } = await AxiosHttpHelper.api.post("/refresh-token")
            const newToken = data.accessToken.token

            localStorage.setItem("accessToken", newToken)

            AxiosHttpHelper.isRefreshing = false
            AxiosHttpHelper.refreshSubscribers.forEach((cb) => cb(newToken))
            AxiosHttpHelper.refreshSubscribers = []

            originalRequest.headers.Authorization = `Bearer ${newToken}`
            return AxiosHttpHelper.api(originalRequest)
          } catch (err) {
            AxiosHttpHelper.isRefreshing = false
            AxiosHttpHelper.refreshSubscribers = []
            localStorage.removeItem("accessToken")
            setUser(undefined)
            return Promise.reject(err)
          }
        }

        return Promise.reject(error)
      }
    )
  }
}

namespace AxiosHttpHelper {
  export type Request = AxiosRequestConfig & {
    method: "GET" | "POST" | "PUT" | "DELETE"
  }
  export type Response<T> = T
}
