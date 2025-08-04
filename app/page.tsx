/**
 * Main Landing Page Component
 * This is the primary page component that renders the Nerite Perps: Documentation page.
 */

"use client"

import Link from "next/link"
import { GithubIcon, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Summary from "./docs/1-summary/page"
import Longs from "./docs/2-longs/page"
import Shorts from "./docs/3-shorts/page"
import Svr from "./docs/4-svr/page"
import CreLiquidations from "./docs/5-cre-liquidations/page"
import CreRedemptions from "./docs/6-cre-redemptions/page"
import Problems from "./docs/7-problems/page"
import Analysis from "./docs/8-analysis/page"

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
      <section className="flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="bg-brand-cream w-full md:w-1/4 p-8 flex flex-col justify-between h-40 md:h-60">
        </div>

        {/* Right Column with new background */}
        <div className="bg-brand-peach w-full md:w-3/4 relative h-40 md:h-60 overflow-hidden">
         <img 
            src="/Untitled-8.png" 
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Docs Section */}
      <section id="docs" className="min-h-screen">
        <div className="flex">
          <div className="w-1/4 bg-brand-cream p-8 fixed top-0 left-0 h-screen overflow-y-auto">
            <div className="flex flex-col justify-between h-full">
              <div className="w-1/2 inline-block bg-brand-peach text-brand-cocoa font-eight-bit px-4 py-2 text-xl flex items-center justify-center border-2 border-brand-mustard">
                Nerite Perps
              </div>

              <div className="text-brand-cocoa text-2xl md:text-3xl font-serif">
                <h1>Directional Flash Loan Perps for Nerite Assets.</h1>
                <h2 className="mt-16">Built with Contango, Euler & Uniswap Liquidity, and Chainlink CRE.</h2>
              </div>

              <div className="flex space-x-4">
                <a 
                  href="https://github.com/contango-xyz/core-v2/tree/main/src"
                  className="bg-brand-peach rounded-full p-2 flex items-center justify-center w-10 h-10 hover:bg-brand-orange transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="w-6 h-6 text-brand-cocoa" />
                </a>
              </div>
            </div>
          </div>

          {/* Scrollable Main Content */}
          <div className="w-3/4 ml-[25%] bg-brand-cream">
            <div className="space-y-8 p-8">
            <section id="summary">
            <Summary />
            </section>
              <section id="longs">
                <Longs />
              </section>
              <section id="shorts">
                <Shorts />
              </section> 
              <section id="svr">
                <Svr />
              </section> 
              <section id="cre-liquidations">
                <CreLiquidations />
              </section> 
              {/*<section id="cre-redemptions">
                <CreRedemptions />
              </section> 
              <section id="problems">
                <Problems />
              </section>
              <section id="analysis">
                <Analysis />
              </section> */} 
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}
