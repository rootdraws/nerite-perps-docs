import { FeatureCard } from "@/components/docs/feature-card"
import { Shield, FileText, Code, BookMarked } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-serif text-amber-resin">Documentation</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-[#FFF5E1]">
          Welcome to the STICKY.MONEY documentation. Here you'll find everything you need to know about our platform.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <FeatureCard
          icon={<Code className="h-8 w-8" />}
          title="Core Concepts"
          description="Learn about Incentivize Supply, Tokenomics, SYRUP, OEV, Fees, and popCORN Bribes."
          href="/docs/incentivize-supply"
          className="border-amber-resin"
        />

        <FeatureCard
          icon={<Shield className="h-8 w-8" />}
          title="Security"
          description="Review our audits and contract addresses."
          href="/docs/audits"
          className="border-amber-resin"
        />

        <FeatureCard
          icon={<FileText className="h-8 w-8" />}
          title="Guides"
          description="Step-by-step guides for Voting, Directional Trading, and Levered Loops."
          href="/docs/voting-supply"
          className="border-amber-resin"
        />

        <FeatureCard
          icon={<BookMarked className="h-8 w-8" />}
          title="Resources"
          description="Access our glossary and media kit."
          href="/docs/glossary"
          className="border-amber-resin"
        />
      </div>
    </div>
  )
}
