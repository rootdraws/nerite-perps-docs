/**
 * Main Landing Page Component
 *
 * This is the primary page component that renders the STICKY.MONEY landing page.
 * It implements a split-screen layout with:
 * - Left section (1/4 width): Dark background with brand information and social links
 * - Right section (3/4 width): Amber/honey colored section with the brand name
 *
 * The page is fully responsive, stacking vertically on mobile devices and
 * displaying side-by-side on larger screens.
 */

"use client"

import Link from "next/link"
import { BookOpen, GithubIcon, Twitter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { DocsSidebar } from "@/components/docs/docs-sidebar"
import { useEffect, useState } from "react"
import HomeSection from "./docs/page"
import StrategicPartners from "./docs/strategic-partners/page"
import IncentivizeSupply from "./docs/incentivize-supply/page"
import Tokenomics from "./docs/tokenomics/page"
import Syrup from "./docs/syrup/page"
import OEV from "./docs/oev/page"
import Fees from "./docs/fees/page"
import PopcornBribes from "./docs/popcorn-bribes/page"
import Audits from "./docs/audits/page"
import ContractAddresses from "./docs/contract-addresses/page"
import VotingSupply from "./docs/voting-supply/page"
import VotingBorrows from "./docs/voting-borrows/page"
import DirectionalTrading from "./docs/directional-trading/page"
import LeveredLoops from "./docs/levered-loops/page"

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
          <div className="flex flex-col justify-between h-full">
            {/* Using Eight Bit Dragon font instead of MEK-Mono */}
            <div className="w-1/2 inline-block bg-[#FFE5B4] text-[#5E2605] font-eight-bit px-4 py-2 text-xl flex items-center justify-center border-2 border-[#DC940F]">
              STICKY.MONEY
            </div>

            <div className="text-[#5E2605] text-3xl md:text-4xl font-serif">
              <h1>A BSC-Native Lending Co-Operative.</h1>
              <h2 className="mt-16">The deepest liquidity for BTCFi on Binance Smart Chain.</h2>
            </div>

            {/* Fixed social links */}
            <div className="flex space-x-4">
              <a 
                href="https://rootdraws.gitbook.io/sticky-money/"
                className="bg-[#FFE5B4] rounded-full p-2 flex items-center justify-center w-10 h-10 hover:bg-[#FF8C42] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="w-6 h-6 text-[#5E2605]" />
              </a>
              <a 
                href="https://github.com/StickyMoney"
                className="bg-[#FFE5B4] rounded-full p-2 flex items-center justify-center w-10 h-10 hover:bg-[#FF8C42] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="w-6 h-6 text-[#5E2605]" />
              </a>
              <a 
                href="https://twitter.com/rootdraws"
                className="bg-[#FFE5B4] rounded-full p-2 flex items-center justify-center w-10 h-10 hover:bg-[#FF8C42] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-6 h-6 text-[#5E2605]" />
              </a>
            </div>
          </div>
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
            <a href="#docs">
              <Button
                variant="ghost"
                size="lg"
                className="rounded-full h-16 w-16 p-0 border-2 border-[#5E2605] hover:border-[#5E2605] hover:bg-[#FF8C42] group"
              >
                <ChevronDown className="h-8 w-8 text-[#5E2605] group-hover:text-white animate-bounce" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Docs Section */}
      <section id="docs" className="min-h-screen">
        <div className="flex min-h-screen">
          <div className="w-1/4 bg-[#FFF5E1] p-6 sticky top-0 h-screen overflow-y-auto">
            <DocsSidebar />
          </div>
          <div className="w-3/4 bg-[#FFF5E1] overflow-y-auto">
            <div className="space-y-8 p-8">
              <section id="home">
                <HomeSection />
              </section>
              <section id="strategic-partners">
                <StrategicPartners />
              </section>
              <section id="incentivize-supply">
                <IncentivizeSupply />
              </section>
              <section id="tokenomics">
                <Tokenomics />
              </section>
              <section id="syrup">
                <Syrup />
              </section>
              <section id="oev">
                <OEV />
              </section>
              <section id="fees">
                <Fees />
              </section>
              <section id="popcorn-bribes">
                <PopcornBribes />
              </section>
              <section id="audits">
                <Audits />
              </section>
              <section id="contract-addresses">
                <ContractAddresses />
              </section>
              <section id="voting-supply">
                <VotingSupply />
              </section>
              <section id="voting-borrows">
                <VotingBorrows />
              </section>
              <section id="directional-trading">
                <DirectionalTrading />
              </section>
              <section id="levered-loops">
                <LeveredLoops />
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
