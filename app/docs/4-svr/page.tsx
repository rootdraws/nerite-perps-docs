import Image from "next/image"

export default function ContractAddressesPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-eight-bit text-[#5E2605]">Chainlink SVR: Sustainable Incentives</h2>
      
      {/* <div className="relative h-[33vh] w-full overflow-hidden rounded-lg border-2 border-[#DC940F]">
        <Image
          src="/placeholder-1.jpg"
          alt="Sustainable Incentives - SVR"
          fill
          className="object-cover"
        />
      </div> */}

    {/* SVR: Question 1 */}
      <h3 className="text-lg text-[#5E2605]/80">Q: How does Chainlink SVR create sustainable incentives for Nerite Perps?</h3>

    {/* SVR: Answer 1 */}
    <pre className="font-mono text-sm text-[#5E2605]/80 bg-[#FFF5E1] p-4 rounded border-2 border-[#DC940F] whitespace-pre-wrap">
      {`Nerite has already partnered with API3, and Long Liquidations are currently directed toward the USND Stability Pools.

Chainlink SVR will be integrated into the Euler Markets, and cycled back to users -- meaning that the OEV revenue from Short Liquidations will be split between Chainlink, and incentivization for more borrows on those Euler Markets.

The result ought to be higher utilization of borrows, regardless of market volatility.`}
    </pre>

    {/* SVR: Question 2 */}
    <h3 className="text-lg text-[#5E2605]/80">Q: Why is directional leverage necessary for SVR?</h3>

    {/* SVR: Answer 2 */}
    <pre className="font-mono text-sm text-[#5E2605]/80 bg-[#FFF5E1] p-4 rounded border-2 border-[#DC940F] whitespace-pre-wrap">
      {`Levered Loops typically use Exchange Rate Oracles to reduce the threat of liquidation during depeg events. As long as the backing of these assets remains 1:1, depeg events only last until the withdraw queue has been cleared -- [10 to 14 days].

Directional Leverage is necessary if you want to build a business model around OEV.

Chainlink SVR therefore needs: 

1. Directional Risk being Taken on Money Markets with SVR Feeds. 
2. Incentives & Tools for traders, which offer traders a meaningful edge for directional leverage.

Chainlink CRE will be able to provide this data, and make it actionable for traders.`}
    </pre>    
    </div>
  )
}
