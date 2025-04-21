"use client"

import Link from "next/link"
import { Github, Menu, Twitter, DiscIcon as Discord } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { DocsSidebar } from "./docs-sidebar"

export function DocsHeader() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#FFE5B4] text-amber-resin">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2" suppressHydrationWarning>
            <span className="font-eight-bit">STICKY.MONEY</span>
          </Link>
          <Button
            variant="outline"
            size="icon"
            className="mr-2 md:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="flex items-center">
            <Link href="https://github.com" target="_blank" rel="noreferrer" suppressHydrationWarning>
              <Button variant="ghost" size="icon" className="text-amber-resin">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noreferrer" suppressHydrationWarning>
              <Button variant="ghost" size="icon" className="text-amber-resin">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="https://discord.com" target="_blank" rel="noreferrer" suppressHydrationWarning>
              <Button variant="ghost" size="icon" className="text-amber-resin">
                <Discord className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {showMobileMenu && (
        <div className="md:hidden">
          <DocsSidebar className="border-t" />
        </div>
      )}
    </header>
  )
}
