import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

// Load Inter font with Latin character subset
const inter = Inter({ subsets: ["latin"] })

// Define metadata for SEO and browser tabs
export const metadata: Metadata = {
  title: "Sticky Money",
  description: "A BSC-Native Lending Co-Operative",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "overflow-x-hidden")}>
        {children}
      </body>
    </html>
  )
}
