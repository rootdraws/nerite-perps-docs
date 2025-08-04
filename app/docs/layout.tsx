import type React from "react"
import { Inter, Playfair_Display } from "next/font/google"
import type { Metadata } from "next"

// Load Inter font with Latin character subset
const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "700"]
})

// Define metadata for SEO and browser tabs
export const metadata: Metadata = {
  title: "Nerite Perps: Documentation",
  description: "Executing Flash Loan Perps on top of Nerite and Euler Liquidity.",
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Main content */}
      <div className="flex flex-1 relative">
        {/* Left Column - Navigation */}
        <div className="bg-brand-cream w-1/4 fixed top-0 left-0 h-screen">
          <div className="h-full p-6">
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="bg-brand-cream w-3/4 ml-[25%] min-h-screen">
          <div className="h-full overflow-y-auto">
            <div className="p-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
