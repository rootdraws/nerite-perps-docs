import { FeatureCard } from '@/components/feature-card'
import { BookOpen, Shield, BookText, FileText } from 'lucide-react'

export default function HomePage() {
  return (
    <section id="home" className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="mb-4 text-3xl font-bold">Welcome to the Documentation</h1>
        <p className="mb-8 text-amber-resin/60">
          Explore our comprehensive guides and resources to get started with our platform.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <FeatureCard
            title="Core Concepts"
            description="Learn about the fundamental concepts and features"
            icon={BookOpen}
            href="/docs/core-concepts"
          />
          <FeatureCard
            title="Security"
            description="Understand our security measures and best practices"
            icon={Shield}
            href="/docs/security"
          />
          <FeatureCard
            title="Guides"
            description="Step-by-step tutorials and how-to guides"
            icon={BookText}
            href="/docs/guides"
          />
          <FeatureCard
            title="Resources"
            description="Additional resources and reference materials"
            icon={FileText}
            href="/docs/resources"
          />
        </div>
      </div>
    </section>
  )
} 