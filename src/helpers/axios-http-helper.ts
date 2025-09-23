import axios, { AxiosError } from "axios"

export class AxiosHttpHelper {
  static readonly api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
  })
  static readonly PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL

  static async request<T = any>(request: AxiosHttpHelper.Request): Promise<AxiosHttpHelper.Response<T>> {
    try {
      const accessToken = localStorage.getItem("accessToken")

      AxiosHttpHelper.api.defaults.headers.common["authorization"] = accessToken ? accessToken : ""
      AxiosHttpHelper.api.defaults.headers.common["Content-Type"] = "application/json"
      const response = await AxiosHttpHelper.api.request<T>({
        method: request.method,
        url: request.url,
        data: request.data,
      })

      return response.data
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log("error", error)
        throw new Error(error.stack)
      }
    }
  }
}

namespace AxiosHttpHelper {
  export type Request = {
    method: "GET" | "POST" | "PUT" | "DELETE"
    url: string
    data?: any
    headers?: Record<string, string>
  }
  export type Response<T> = T | undefined
}
