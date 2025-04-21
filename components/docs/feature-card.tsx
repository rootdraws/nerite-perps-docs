import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  href: string
  icon?: React.ReactNode
  className?: string
  external?: boolean
}

export function FeatureCard({ title, description, href, icon, className, external = false }: FeatureCardProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "group relative rounded-lg border border-sticky-brown p-6 shadow-md transition-shadow hover:shadow-lg bg-sticky-cream",
        className,
      )}
      suppressHydrationWarning
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {icon && <div className="text-sticky-brown">{icon}</div>}
          <h3 className="font-semibold text-sticky-brown">{title}</h3>
        </div>
        {external ? (
          <ExternalLink className="h-4 w-4 text-sticky-brown" />
        ) : (
          <div className="h-4 w-4 text-sticky-brown opacity-0 transition-opacity group-hover:opacity-100">→</div>
        )}
      </div>
      <p className="mt-2 text-sticky-brown/80">{description}</p>
    </Link>
  )
}
