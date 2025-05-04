import Image from "next/image"

export default function ContractAddressesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-eight-bit text-[#5E2605]">Launch</h1>
      
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border-2 border-[#DC940F]">
        <Image
          src="/placeholder-1.jpg"
          alt="Core contracts architecture"
          fill
          className="object-cover"
        />
      </div>

      {/* High Level Description */}
      <p className="text-lg text-[#5E2605]/80">
        Steps to Launch:
      </p>

      {/* Bullet Points */}
      <ul className="space-y-2 text-lg text-[#5E2605]/80">
        <li> Corn // popCORN Bribes</li>
        <li> [Morpho Blue](https://github.com/morpho-org/morpho-lite-apps)</li>
        <li> [Contango Core v1](https://github.com/contango-xyz/core?tab=License-1-ov-file)</li>
        <li> Emissions</li>
      </ul>
    </div>
  )
}
