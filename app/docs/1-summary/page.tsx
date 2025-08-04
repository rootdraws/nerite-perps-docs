import Image from "next/image"

export default function StoryPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-eight-bit text-[#5E2605]">Summary:</h2>
      
      {/* <div className="relative h-[33vh] w-full overflow-hidden rounded-lg border-2 border-[#DC940F]">
        <Image
          src="/placeholder-1.jpg"
          alt="Costs"
          fill
          className="object-cover"
        />
      </div> */}

      {/* Costs: Question 1 */}
      <h3 className="text-lg text-[#5E2605]/80">Q: What Problems does Nerite Perps Solve?</h3>

      {/* Costs: Answer 1 */}
      <pre className="font-mono text-sm text-[#5E2605]/80 bg-[#FFF5E1] p-4 rounded border-2 border-[#DC940F] whitespace-pre-wrap">
      {`Nerite Perps is a composable integration of Nerite, Euler, Contango, Chainlink, and Uniswap:

  - Nerite has more consistent & affordable funding rates than Hyperliquid for Long Positions.
  - Euler has more consistent & affordable funding rates than Hyperliquid for Short Postiions.
  - Contango cPerps allows Longs and Shorts to be executed with a familiar UX, while being built on top of Nerite and Euler Liquidity.
  - Chainlink CRE provides innovative Limit Orders, which are executed based on the severity of market-wide liquidations, rather than price targets.
  - Chainlink CRE provides an automated Liquity redemption mechanism, which optimizes the redemption of USND for underlying collateral when profitable.
  - Chainlink SVR provides sustainable incentives for Short Postiions.
  - More complex vault strategies can be built upon Nerite Perps, once the system is functional.
      
These solutions will bring growth to Nerite, and provide valuable tools for traders, while demonstrating the capacities of Chainlink CRE.`}
      </pre>
    </div>
  )
} 