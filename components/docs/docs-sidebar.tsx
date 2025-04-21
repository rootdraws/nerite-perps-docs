"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface DocsSidebarProps {
  className?: string
}

export function DocsSidebar({ className }: DocsSidebarProps) {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [currentHash, setCurrentHash] = useState("")
  const [openSections, setOpenSections] = useState({
    introduction: true,
    coreConcepts: false,
    security: false,
    guides: false,
    resources: false,
  })

  useEffect(() => {
    setMounted(true)
    setCurrentHash(window.location.hash)
    
    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }
    
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleLinkClick = (hash: string) => {
    setCurrentHash(hash)
  }

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  if (!mounted) {
    return null
  }

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
              href="#home"
              onClick={() => handleLinkClick("#home")}
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentHash === "#home" && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentHash === "#home" && (
                  <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                Home
              </span>
            </Link>
            <Link
              href="#strategic-partners"
              onClick={() => handleLinkClick("#strategic-partners")}
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentHash === "#strategic-partners" && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentHash === "#strategic-partners" && (
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
          <CollapsibleContent className="mt-1 space-y-2 p-6 [&>*]:text-amber-resin/60 [&>*]:hover:text-amber-resin">
            <Link
              href="#incentivize-supply"
              onClick={() => handleLinkClick("#incentivize-supply")}
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentHash === "#incentivize-supply" && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentHash === "#incentivize-supply" && (
                  <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                Incentivize Supply
              </span>
            </Link>
            <Link
              href="#tokenomics"
              onClick={() => handleLinkClick("#tokenomics")}
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentHash === "#tokenomics" && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentHash === "#tokenomics" && (
                  <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                Tokenomics
              </span>
            </Link>
            <Link
              href="#syrup"
              onClick={() => handleLinkClick("#syrup")}
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentHash === "#syrup" && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentHash === "#syrup" && (
                  <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                SYRUP
              </span>
            </Link>
            <Link
              href="#oev"
              onClick={() => handleLinkClick("#oev")}
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentHash === "#oev" && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentHash === "#oev" && (
                  <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                OEV
              </span>
            </Link>
            <Link
              href="#fees"
              onClick={() => handleLinkClick("#fees")}
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentHash === "#fees" && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentHash === "#fees" && (
                  <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                Fees
              </span>
            </Link>
            <Link
              href="#popcorn-bribes"
              onClick={() => handleLinkClick("#popcorn-bribes")}
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentHash === "#popcorn-bribes" && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentHash === "#popcorn-bribes" && (
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
              href="#audits"
              onClick={() => handleLinkClick("#audits")}
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentHash === "#audits" && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentHash === "#audits" && (
                  <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                Audits
              </span>
            </Link>
            <Link
              href="#contract-addresses"
              onClick={() => handleLinkClick("#contract-addresses")}
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentHash === "#contract-addresses" && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentHash === "#contract-addresses" && (
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
              href="#voting-supply"
              onClick={() => handleLinkClick("#voting-supply")}
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentHash === "#voting-supply" && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentHash === "#voting-supply" && (
                  <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                Voting Supply
              </span>
            </Link>
            <Link
              href="#voting-borrows"
              onClick={() => handleLinkClick("#voting-borrows")}
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentHash === "#voting-borrows" && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentHash === "#voting-borrows" && (
                  <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                Voting: Borrows
              </span>
            </Link>
            <Link
              href="#directional-trading"
              onClick={() => handleLinkClick("#directional-trading")}
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentHash === "#directional-trading" && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentHash === "#directional-trading" && (
                  <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                Directional Trading
              </span>
            </Link>
            <Link
              href="#levered-loops"
              onClick={() => handleLinkClick("#levered-loops")}
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-[#FF8C42] py-1 font-serif text-lg p-1",
                currentHash === "#levered-loops" && "text-amber-resin"
              )}
            >
              <span className="relative">
                {currentHash === "#levered-loops" && (
                  <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                Levered Loops
              </span>
            </Link>
          </CollapsibleContent>
        </Collapsible>

        <div className="h-[1px] w-full bg-[#FFF5E1] opacity-20 my-3" />

        <div className="h-px bg-[#FFF5E1]/20 my-2" />
        {/* Resources Section */}
        {/* <Collapsible
          open={openSections.resources}
          onOpenChange={() => toggleSection("resources")}
          className="w-full"
        >
          <div className="flex items-center justify-between w-full">
            <Button
              variant="ghost"
              className="p-0 h-auto hover:bg-transparent w-full"
              onClick={() => toggleSection("resources")}
            >
              <div className="flex items-center w-full">
                <h2 className="text-2xl md:text-3xl font-serif mb-3">Resources</h2>
                <div className="flex-1" />
                <ChevronRight
                  className={cn(
                    "h-6 w-6 text-[#FFF5E1] transition-transform",
                    openSections.resources && "transform rotate-90",
                  )}
                />
              </div>
            </Button>
          </div>
          <CollapsibleContent className="mt-1 space-y-2 p-6">
            <Link
              href="#glossary"
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-amber-resin py-1 font-serif text-lg p-1",
                currentHash === "#glossary" && "text-[#FF8C42] bg-amber-resin/80"
              )}
            >
              <span className="relative">
                {currentHash === "#glossary" && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                Glossary
              </span>
            </Link>
            <Link
              href="#media-kit"
              className={cn(
                "block w-full pl-8 ml-4 text-amber-resin/60 hover:text-amber-resin py-1 font-serif text-lg p-1",
                currentHash === "#media-kit" && "text-[#FF8C42] bg-amber-resin/80"
              )}
            >
              <span className="relative">
                {currentHash === "#media-kit" && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                )}
                Media Kit
              </span>
            </Link>
          </CollapsibleContent>
        </Collapsible> */}
      </div>
    </div>
  )
}
