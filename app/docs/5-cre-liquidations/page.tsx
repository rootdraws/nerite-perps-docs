import Image from "next/image"

export default function ContractAddressesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-eight-bit text-[#5E2605]">Chainlink CRE: Liquidation Amplitude Datastream & Automation</h1>
      
      {/* <div className="relative h-[33vh] w-full overflow-hidden rounded-lg border-2 border-[#DC940F]">
        <Image
          src="/placeholder-1.jpg"
          alt="Chainlink CRE: DataStreams & Compute"
          fill
          className="object-cover"
        />
      </div> */}

     {/* CRE: Question 1 */}
     <h3 className="text-lg text-[#5E2605]/80">Q: What strategic value is there in measuring the amplitude of widespread liquidation events?</h3>

      {/* CRE: Answer 1 */}
      <pre className="font-mono text-sm text-[#5E2605]/80 bg-[#FFF5E1] p-4 rounded border-2 border-[#DC940F] whitespace-pre-wrap">
      {`Systemic Liquidation Events are a measurement of the amount of accute pain in the market.

Traders have access to Liquidation Aggregation Data on several analytics sites:

- [Coinglass](https://www.coinglass.com/LiquidationData)
- [Coinalize](https://coinalyze.net/bitcoin/liquidations/)
- [Velo Liquidation Aggregate Indicator](https://velo.xyz/chart) 

Chainlink CRE will make this data actionable -- providing traders with limit orders which are executed based aggregated directional liquidations.`}
      </pre>

      {/* CRE: Question 2 */}
     <h3 className="text-lg text-[#5E2605]/80">Q: How do you create a CRE Flow that optimizes entries for Levered positions?</h3>

{/* CRE: Answer 2 */}
<pre className="font-mono text-sm text-[#5E2605]/80 bg-[#FFF5E1] p-4 rounded border-2 border-[#DC940F] whitespace-pre-wrap">
{`A Custom Data Stream would be assembled through CRE as follows: 

1. The Coinglass API pulls BTC Liquidation Data from all major CEXs every 5 minutes.
3. The sum of the data would be calculated and used as a ranking on a scale in CRE.
4. CRE logic would set $100m liquidated shorts as +1, and $100m liquidated longs as -1, and $200m liquidated shorts as +2, and $200m liquidated longs as -2.
5. A Range is defined, -10 to 0 to +10.
6. Zero represents no liquidations. 
7. The resulting Data Stream would be a "Liquidation Seismograph" which oscilates between -10 and +10, depending on the severity of the liquidations for BTC within that Hour. 
8. Users would be able to set Limit Orders based on the Hourly Liquidation Amplitude, which are calculated on each 5m Heartbeat.

"The Liquidation Seismograph" Data Stream:
================================================================================================
+10  [Range +10 represents the max historical amount for liquidated Shorts for a specific asset.]


--- 0 [Represents no liquidations.]


-10  [Range -10 represents the max historical amount for liquidated Longs for a specific asset.]
================================================================================================

An Automation Example:

- Limit Orders may be set at -2, which means [Open a Long Position when $200mm in Liquidated Longs have been recorded within the last Hour.]
- Limit Orders are executed on the 5 minute Heartbeat immediately following the "Liquidation Seismograph" surpassing the $200mm mark, as the sums are building throughout the hour, at each 5m heartbeat.

The Limit Order does not open at an arbitrary price target, but instead, when the market has expressed $200mm or more, in tangible pain -- facilitating an automated mean reversion trade.`}
</pre>
    </div>
  )
}
