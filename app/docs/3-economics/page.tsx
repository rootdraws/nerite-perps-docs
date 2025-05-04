import Image from "next/image"

export default function TokenomicsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-eight-bit text-[#5E2605]">Tokenomics</h1>
      
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border-2 border-[#DC940F]">
        <Image
          src="/placeholder-1.jpg"
          alt="Token distribution pie chart"
          fill
          className="object-cover"
        />
      </div>

      {/* High Level Description */}
      <p className="text-lg text-[#5E2605]/80">
        70% Fair Launch, 15% Team, 10% Bribes, 5% LP
      </p>

      {/* Bullet Points */}
      <ul className="space-y-2 text-lg text-[#5E2605]/80">
        <li>• 70% Fair Launch, 15% Team, 10% Bribes, 5% LP</li>
        <li>• 100% of all fees are distributed to token holders.</li>
        <li>• 100% of all fees are distributed to token holders.</li>
        <li>• 100% of all fees are distributed to token holders.</li>
      </ul>
    </div>
  )
}
