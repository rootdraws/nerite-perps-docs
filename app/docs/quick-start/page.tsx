import { FeatureCard } from "@/components/docs/feature-card"
import { BookOpen, Shield, FileText, Code } from "lucide-react"

export default function QuickStartPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Quick Start</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Use the links below to get started on <span className="text-primary">YourProtocol</span>!
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <FeatureCard
          icon={<Code className="h-8 w-8" />}
          title="Core Concepts"
          description="Learn the core concepts behind YourProtocol, tokenomics, and more."
          href="/docs/core-concepts"
        />

        <FeatureCard
          icon={<BookOpen className="h-8 w-8" />}
          title="Tokenomics"
          description="Read about token supply, emission schedule, distribution and more."
          href="/docs/tokenomics"
        />

        <FeatureCard
          icon={<FileText className="h-8 w-8" />}
          title="Guides"
          description="Step-by-step guides to bridging, providing liquidity, and interacting with the protocol."
          href="/docs/guides"
        />

        <FeatureCard
          icon={<Shield className="h-8 w-8" />}
          title="Security"
          description="Security measures, audit reports, and contract addresses."
          href="/docs/security"
        />
      </div>
    </div>
  )
}
