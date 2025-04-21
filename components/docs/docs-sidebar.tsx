"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useState } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface DocsSidebarProps {
  className?: string
}

export function DocsSidebar({ className }: DocsSidebarProps) {
  const pathname = usePathname()
  const activeSection = useIntersectionObserver()
  const [openSections, setOpenSections] = useState({
    introduction: true,
    coreConcepts: false,
    security: false,
    guides: false,
    resources: false,
  })

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  // If we're on a specific page, use that as the active section
  const currentSection = pathname !== '/docs' ? pathname.split('/').pop() : activeSection

  return (
    <div className={cn("", className)}>
      <div className="space-y-1">
        <Collapsible
          open={openSections.introduction}
          onOpenChange={() => toggleSection("introduction")}
          className="py-2"
        >
          <div className="flex items-center justify-between w-full">
            <Button
              variant="ghost"
              className="p-0 h-auto w-full hover:bg-transparent"
              onClick={() => toggleSection("introduction")}
            >
              <div className="flex items-center w-full">
                <h2 className="text-2xl md:text-3xl font-serif mb-3 text-amber-resin">Introduction</h2>
                <div className="flex-1" />
                <ChevronRight
                  className={cn(
                    "h-6 w-6 text-amber-resin transition-transform",
                    openSections.introduction && "transform rotate-90",
                  )}
                />
              </div>
            </Button>
          </div>
          <CollapsibleContent className="mt-1 space-y-2 p-6">
            <Link
              href="/docs"
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentSection === 'home' && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentSection === 'home' && (
                  <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                Home
              </span>
            </Link>
            <Link
              href="/docs/strategic-partners"
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentSection === 'strategic-partners' && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentSection === 'strategic-partners' && (
                  <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                Strategic Partners
              </span>
            </Link>
          </CollapsibleContent>
        </Collapsible>

        <div className="h-[1px] w-full bg-[#FFF5E1] opacity-20 my-3" />

        <Collapsible
          open={openSections.coreConcepts}
          onOpenChange={() => toggleSection("coreConcepts")}
          className="py-2"
        >
          <div className="flex items-center justify-between w-full">
            <Button
              variant="ghost"
              className="p-0 h-auto w-full hover:bg-transparent"
              onClick={() => toggleSection("coreConcepts")}
            >
              <div className="flex items-center w-full">
                <h2 className="text-2xl md:text-3xl font-serif mb-3 text-amber-resin">Core Concepts</h2>
                <div className="flex-1" />
                <ChevronRight
                  className={cn(
                    "h-6 w-6 text-amber-resin transition-transform",
                    openSections.coreConcepts && "transform rotate-90",
                  )}
                />
              </div>
            </Button>
          </div>
          <CollapsibleContent className="mt-1 space-y-2 p-6">
            <Link
              href="/docs/incentivize-supply"
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentSection === 'incentivize-supply' && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentSection === 'incentivize-supply' && (
                  <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                Incentivize Supply
              </span>
            </Link>
            <Link
              href="/docs/tokenomics"
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentSection === 'tokenomics' && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentSection === 'tokenomics' && (
                  <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                Tokenomics
              </span>
            </Link>
            <Link
              href="/docs/syrup"
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentSection === 'syrup' && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentSection === 'syrup' && (
                  <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                SYRUP
              </span>
            </Link>
            <Link
              href="/docs/oev"
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentSection === 'oev' && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentSection === 'oev' && (
                  <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                OEV
              </span>
            </Link>
            <Link
              href="/docs/fees"
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentSection === 'fees' && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentSection === 'fees' && (
                  <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                Fees
              </span>
            </Link>
            <Link
              href="/docs/popcorn-bribes"
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentSection === 'popcorn-bribes' && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentSection === 'popcorn-bribes' && (
                  <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                popCORN Bribes
              </span>
            </Link>
          </CollapsibleContent>
        </Collapsible>

        <div className="h-[1px] w-full bg-[#FFF5E1] opacity-20 my-3" />

        <Collapsible
          open={openSections.security}
          onOpenChange={() => toggleSection("security")}
          className="py-2"
        >
          <div className="flex items-center justify-between w-full">
            <Button
              variant="ghost"
              className="p-0 h-auto w-full hover:bg-transparent"
              onClick={() => toggleSection("security")}
            >
              <div className="flex items-center w-full">
                <h2 className="text-2xl md:text-3xl font-serif mb-3 text-amber-resin">Security</h2>
                <div className="flex-1" />
                <ChevronRight
                  className={cn(
                    "h-6 w-6 text-amber-resin transition-transform",
                    openSections.security && "transform rotate-90",
                  )}
                />
              </div>
            </Button>
          </div>
          <CollapsibleContent className="mt-1 space-y-2 p-6">
            <Link
              href="/docs/audits"
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentSection === 'audits' && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentSection === 'audits' && (
                  <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                Audits
              </span>
            </Link>
            <Link
              href="/docs/contract-addresses"
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentSection === 'contract-addresses' && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentSection === 'contract-addresses' && (
                  <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                Contract Addresses
              </span>
            </Link>
          </CollapsibleContent>
        </Collapsible>

        <div className="h-[1px] w-full bg-[#FFF5E1] opacity-20 my-3" />

        <Collapsible
          open={openSections.guides}
          onOpenChange={() => toggleSection("guides")}
          className="py-2"
        >
          <div className="flex items-center justify-between w-full">
            <Button
              variant="ghost"
              className="p-0 h-auto w-full hover:bg-transparent"
              onClick={() => toggleSection("guides")}
            >
              <div className="flex items-center w-full">
                <h2 className="text-2xl md:text-3xl font-serif mb-3 text-amber-resin">Guides</h2>
                <div className="flex-1" />
                <ChevronRight
                  className={cn(
                    "h-6 w-6 text-amber-resin transition-transform",
                    openSections.guides && "transform rotate-90",
                  )}
                />
              </div>
            </Button>
          </div>
          <CollapsibleContent className="mt-1 space-y-2 p-6">
            <Link
              href="/docs/voting-supply"
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentSection === 'voting-supply' && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentSection === 'voting-supply' && (
                  <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                Voting Supply
              </span>
            </Link>
            <Link
              href="/docs/voting-borrows"
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentSection === 'voting-borrows' && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentSection === 'voting-borrows' && (
                  <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                Voting: Borrows
              </span>
            </Link>
            <Link
              href="/docs/directional-trading"
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentSection === 'directional-trading' && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentSection === 'directional-trading' && (
                  <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                Directional Trading
              </span>
            </Link>
            <Link
              href="/docs/levered-loops"
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentSection === 'levered-loops' && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentSection === 'levered-loops' && (
                  <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                Levered Loops
              </span>
            </Link>
          </CollapsibleContent>
        </Collapsible>

        <div className="h-[1px] w-full bg-[#FFF5E1] opacity-20 my-3" />

        <div className="h-px bg-[#FFF5E1]/20 my-2" />
      </div>
    </div>
  )
}
