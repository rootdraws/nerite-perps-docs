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
      <h3 className="text-lg text-[#5E2605]/80">Q: What is our main purpose for Chainlink CRE?</h3>

      {/* Costs: Answer 1 */}
      <pre className="font-mono text-sm text-[#5E2605]/80 bg-[#FFF5E1] p-4 rounded border-2 border-[#DC940F] whitespace-pre-wrap">
      {`The following tweet is a common occurance in our markets:
      
  @WatcherGuru
  JUST IN: $210,000,000 liquidated from the crypto market in the past 60 minutes.
      
Depending on which side of the market has been liquidated, this type of event represents itself as a very long wick in one direction, followed by a potential mean reversion trade. The mean reversion trade is not a promise, but it is an edge which directional traders currently do not have.
      
Traders can use Coinglass APIs to get the liquidation data, and run local trading bots to execute orders -- but, there is no onchain solution.

CRE enables a regular retrieval of this data from the Coinglass API, at 5 minute intervals, allowing Limit Order execution to be triggered by the severity of liquidations.

Potential use cases: 
  - GMX frontend integration, as a custom order type.
  - Aerodrome / Velodrome POL / Treasury Management tool for hedging LP Positions.
  - Contango Perps Integration to create a better trading UI/UX for Money Markets.

This presentation focuses on integrating CRE into Nerite, to increase directional trade volume, while giving traders a better edge.
`}
      </pre>
      {/* Clickable link just below the box */}
<p className="text-sm text-[#5E2605]/80">
  Source:&nbsp;
  <a
    href="https://docs.coinglass.com/reference/aggregated-liquidation-history"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-[#DC940F]"
  >
    Coinglass API Documentation
  </a>
</p>
    </div>
  )
} 