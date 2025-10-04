import type { Metadata } from "next"
import { Rubik } from "next/font/google"
import { ToastContainer } from "react-toastify"
import { Footer } from "./components/footer/Footer"
import Nav from "./components/nav/Nav"
import AuthProvider from "./context/AuthProvide"
import OrderItemsProvider from "./context/OrderItemsProvider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Food delivery",
}

const font = Rubik({
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
      </head>
      <body className={`${font.className} bg-primary-200`}>
        <AuthProvider>
          <OrderItemsProvider>
            <Nav />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </OrderItemsProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
