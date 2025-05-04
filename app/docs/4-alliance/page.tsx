import Image from "next/image"

export default function StrategicPartnersPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-eight-bit text-[#5E2605]">Alliances</h1>
      
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border-2 border-[#DC940F]">
        <Image
          src="/placeholder-1.jpg"
          alt="Strategic partners network"
          fill
          className="object-cover"
        />
      </div>

      <p className="text-lg text-[#5E2605]/80">
        Strategic partnerships with leading DeFi protocols and infrastructure providers.
      </p>
    </div>
  )
}
