import Image from "next/image"

export default function ContractAddressesPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-eight-bit text-[#5E2605]">Chainlink CRE: Liquity v2 Redemption Datastream & Automation</h2>
      
      {/* <div className="relative h-[33vh] w-full overflow-hidden rounded-lg border-2 border-[#DC940F]">
        <Image
          src="/placeholder-1.jpg"
          alt="Automation"
          fill
          className="object-cover"
        />
      </div> */}

      {/* Automation: Question 1 */}
      <h3 className="text-lg text-[#5E2605]/80">Q: How does Automation Integrate with Nerite Perps?</h3>

      {/* Automation: Answer 1 */}
      <pre className="font-mono text-sm text-[#5E2605]/80 bg-[#FFF5E1] p-4 rounded border-2 border-[#DC940F] whitespace-pre-wrap">
      {`Automation integrates with Nerite Perps by providing a sustainable incentive mechanism for Nerite Perps.`}
      </pre>
    </div>
  )
}
