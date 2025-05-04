import Image from "next/image"

export default function CoreConceptsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-eight-bit text-[#5E2605]">veLending</h1>
      
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border-2 border-[#DC940F]">
        <Image
          src="/placeholder-1.jpg"
          alt="veLending mechanics diagram"
          fill
          className="object-cover"
        />
      </div>

      {/* High Level Description */}
      <p className="text-lg text-[#5E2605]/80">
        A veTrading Co-Operative, on Corn.
      </p>
      
      {/* Bullet Points */}
      <ul className="space-y-2 text-lg text-[#5E2605]/80">
        <li>• Built on Morpho Liquidity</li>
        <li>• Gamified Trading, which allows traders to compete with each other for Tokens.</li>
        <li>• Liquidity Incentives.</li>
        <li>• Fee Share to Token Holders.</li>
      </ul>
    </div>
  )
}
