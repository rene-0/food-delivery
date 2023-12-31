import type { Metadata } from "next"
import { Rubik } from "next/font/google"
import { Footer } from "./components/footer/Footer"
import Nav from "./components/nav/Nav"
import "./globals.css"

export const metadata: Metadata = {
  title: "Food delivery",
  description: "Generated by create next app",
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
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
