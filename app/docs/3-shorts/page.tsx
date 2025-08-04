import Image from "next/image"

export default function ContractAddressesPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-eight-bit text-[#5E2605]">Euler & Contango: Levered Shorts</h2>

      {/* Shorts: Question 1 */}
      <h3 className="text-lg text-[#5E2605]/80">Q: How do Levered Shorts Work on Nerite?</h3>

      {/* Shorts: Answer 1 */}
      <pre className="font-mono text-sm text-[#5E2605]/80 bg-[#FFF5E1] p-4 rounded border-2 border-[#DC940F] whitespace-pre-wrap">
{`Users Access Levered Shorts by executing flash loan short-sells through Euler Markets. For better UI/UX, the Contango Trading Interface on Nerite will allow access to both longs and shorts -- but the fulfillment of shorts will be through Euler.

Here's how Contango cPerp Shorts Work: 

1. Flash Loan.
2. Deposit USDC Collateral into Euler.
3. Borrow DebtAsset you are Shorting.
4. Swap in USDC/DebtAsset pool.
5. Deposit more USDC Collateral, and borrow more DebtAsset -- to the specifications of the user. 
7. To close the loop, pay the USDC to the Flash Loan, instead of adding more collateral. 

Contango cPerps replicate a directionally short perps position by stacking leveraged exposure of short-sells within Euler.`}
    </pre>

    {/* <div className="relative h-[33vh] w-full overflow-hidden rounded-lg border-2 border-[#DC940F]">
        <Image
          src="/placeholder-1.jpg"
          alt="Levered Shorts Flow"
          fill
          className="object-cover"
        />
      </div> *}

       {/* Shorts: Question 2 */}
      <h3 className="text-lg text-[#5E2605]/80">Q: What development work is necessary to build Levered Shorts?</h3>

      {/* Shorts: Answer 2 */}
      <pre className="font-mono text-sm text-[#5E2605]/80 bg-[#FFF5E1] p-4 rounded border-2 border-[#DC940F] whitespace-pre-wrap">
{`Contango already has Euler integrated into the Money Markets Repo. No additional development work is necessary.`}
    </pre>

      {/* Shorts: Question 3 */}
     <h3 className="text-lg text-[#5E2605]/80">Q: What Euler Markets must be deployed?</h3>

      {/* Shorts: Answer 3 */}
      <pre className="font-mono text-sm text-[#5E2605]/80 bg-[#FFF5E1] p-4 rounded border-2 border-[#DC940F] whitespace-pre-wrap">
      {`A fully functional cPerps integration would require Euler Markets with supply for the following assets: 

- ETH
- wstETH
- rETH
- rsETH
- wsETH
- ARB
- COMP
- tBTC

Liquidity Deals will be made, so that the tBTC Treasury - for example - seeds the Liquidity necessary to short tBTC.

Euler Markets will be deployed, and curated by AlphaGrowth.`}
      </pre>

      {/* <div className="relative h-[33vh] w-full overflow-hidden rounded-lg border-2 border-[#DC940F]">
        <Image
          src="/placeholder-1.jpg"
          alt="Liquidity Deal Partnerships"
          fill
          className="object-cover"
        />
      </div> */}

    </div>
  )
}
