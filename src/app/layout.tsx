import type React from "react"
import type { Metadata } from "next"
// import { GeistSans, GeistMono } from ""
import "./globals.css"

// const geistSans = GeistSans({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-geist-sans",
// })

// const geistMono = GeistMono({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-geist-mono",
// })

export const metadata: Metadata = {
  title: "FX Buddy - Professional Forex Trading Platform",
  description:
    "Advanced forex trading platform with real-time market data, professional charts, and comprehensive trading tools.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`antialiased`}>
      <body className="bg-aquatic-gradient min-h-screen">{children}</body>
    </html>
  )
}
