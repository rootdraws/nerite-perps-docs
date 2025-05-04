/**
 * Main Landing Page Component
 *
 * This is the primary page component that renders the STICKY.MONEY landing page.
 */

"use client"

import Link from "next/link"
import { GithubIcon, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Story from "./docs/1-story/page"
import Mechanics from "./docs/2-mechanics/page"
import Economics from "./docs/3-economics/page"
import Alliance from "./docs/4-alliance/page"
import Launch from "./docs/5-launch/page"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen">
      {/* Landing Section */}
      <section className="flex min-h-screen flex-col md:flex-row">
        {/* Left Column */}
        <div className="bg-[#FFF5E1] w-full md:w-1/4 p-8 flex flex-col justify-between min-h-[50vh] md:min-h-screen">
        </div>

        {/* Right Column with new background */}
        <div className="bg-[#FFE5B4] w-full md:w-3/4 flex items-center justify-center p-8 relative">
          <img 
            src="/Background-INK.png" 
            alt="Background"
            className="w-full h-auto object-contain"
          />
          
          {/* Scroll down button */}
          <div className="absolute bottom-8 right-8">
            <Link href="/docs">
              <Button
                variant="ghost"
                size="lg"
                className="rounded-full h-16 w-16 p-0 border-2 border-[#5E2605] hover:border-[#5E2605] hover:bg-[#FF8C42] group"
              >
                <ChevronDown className="h-8 w-8 text-[#5E2605] group-hover:text-white animate-bounce" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Docs Section */}
      <section id="docs" className="min-h-screen">
        <div className="flex">
          <div className="w-1/4 bg-[#FFF5E1] p-8 fixed top-0 left-0 h-screen overflow-y-auto">
            <div className="flex flex-col justify-between h-full">
              <div className="w-1/2 inline-block bg-[#FFE5B4] text-[#5E2605] font-eight-bit px-4 py-2 text-xl flex items-center justify-center border-2 border-[#DC940F]">
                STICKY.MONEY
              </div>

              <div className="text-[#5E2605] text-2xl md:text-3xl font-serif">
                <h1>A veTrading Co-Operative, on Corn.</h1>
                <h2 className="mt-16">Directional Perps for $BTCN, Built on Morpho Liquidity.</h2>
              </div>

              <div className="flex space-x-4">
                <a 
                  href="https://github.com/StickyMoney"
                  className="bg-[#FFE5B4] rounded-full p-2 flex items-center justify-center w-10 h-10 hover:bg-[#FF8C42] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="w-6 h-6 text-[#5E2605]" />
                </a>
                <a 
                  href="https://x.com/moneysosticky"
                  className="bg-[#FFE5B4] rounded-full p-2 flex items-center justify-center w-10 h-10 hover:bg-[#FF8C42] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#5E2605] text-xl font-bold">𝕏</span>
                </a>
              </div>
            </div>
          </div>

          {/* Scrollable Main Content */}
          <div className="w-3/4 ml-[25%] bg-[#FFF5E1]">
            <div className="space-y-8 p-8">
              <section id="story">
                <Story />
              </section>
              <section id="mechanics">
                <Mechanics />
              </section>
              <section id="economics">
                <Economics />
              </section>
              <section id="alliance">
                <Alliance />
              </section>
              <section id="launch">
                <Launch />
              </section>
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}
