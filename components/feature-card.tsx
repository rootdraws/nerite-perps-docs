import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

export function FeatureCard({ title, description, icon: Icon, href }: FeatureCardProps) {
  return (
    <Link
      href={href}
      className="group relative rounded-lg border border-amber-resin/10 bg-amber-resin/5 p-6 transition-all hover:border-amber-resin/20 hover:bg-amber-resin/10"
    >
      <div className="flex items-center gap-4">
        <div className="rounded-lg bg-amber-resin/10 p-2">
          <Icon className="h-6 w-6 text-amber-resin" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-amber-resin/60">{description}</p>
        </div>
      </div>
    </Link>
  )
} 