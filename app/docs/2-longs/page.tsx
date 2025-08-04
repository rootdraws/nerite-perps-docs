import Image from "next/image"

export default function CoreConceptsPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-eight-bit text-[#5E2605]">Nerite & Contango: Levered Longs</h2>

      {/* Longs: Question 1 */}
      <h3 className="text-lg text-[#5E2605]/80">Q: How do Levered Longs Work on Nerite?</h3>

      {/* Longs: Answer 1 */}
      <pre className="font-mono text-sm text-[#5E2605]/80 bg-[#FFF5E1] p-4 rounded border-2 border-[#DC940F] whitespace-pre-wrap">{`Nerite must be added to the integrated Money Markets folder for Contango v2. Through Contango, Nerite users will be able to build long exposure through directional loops:

1. Flash Loan.
2. Deposit Collateral into Nerite.
3. Mint USND.
4. Swap in USND/USDC Pool.
5. Swap in USDC/Collateral Pool.
6. Deposit more Collateral, and Mint more USND -- to the specifications of the user.
7. To close the loop, pay back the flash loan instead of swapping for more collateral.

Contango cPerps replicate a directionally long perps position by stacking leveraged exposure of collateral within Nerite.

Contango v2 also has contracts built out for position management.
`}</pre>
    
    {/* <div className="relative h-[33vh] w-full overflow-hidden rounded-lg border-2 border-[#DC940F]">
        <Image
          src="/placeholder-1.jpg"
          alt="Levered Longs Flow"
          fill
          className="object-cover"
        />
      </div> */}

    {/* Longs: Question 2 */}
    <h3 className="text-lg text-[#5E2605]/80">Q: What development work is necessary to build Levered Longs on Nerite?</h3>

    {/* Longs: Answer 2 */}
    <pre className="font-mono text-sm text-[#5E2605]/80 bg-[#FFF5E1] p-4 rounded border-2 border-[#DC940F] whitespace-pre-wrap">
{`The Contango v2 Repo has a folder which is called Money Markets: 

moneymarkets
├── comet
│   ├── dependencies
│   │   ├── IComet.sol
│   │   └── ICometRewards.sol
│   ├── CometMoneyMarket.sol
│   ├── CometMoneyMarketView.sol
│   └── CometReverseLookup.sol
├── euler
├── interfaces
├── morpho
├── BaseMoneyMarket.sol
├── BaseMoneyMarketView.sol
├── ContangoLens.sol
├── ImmutableBeaconProxy.sol
├── Liquidations.sol
├── UnderlyingPositionFactory.sol
└── UpgradeableBeaconWithOwner.sol

A /nerite folder would need to be created here, which connects the Contango contracts with Liquity v2 contracts.

The contracts which must be written are likely:
- INerite.sol - Interface for Nerite.
- NeriteMoneyMarket.sol - Connecting Nerite Minting & Redemption functionality to BaseMoneyMarket.sol.
- NeriteMoneyMarketView.sol - Analytics for Postions.
- NeriteReverseLookup.sol - A way to lookup positions from Contango NFTs on Nerite.

It's unlikely that a rewards interface would be needed, because the flash loans would use the collateral deposit, and mint functions -- but not the stability pools.`}
    </pre>

{/* Clickable link just below the box */}
<p className="text-sm text-[#5E2605]/80">
  Source:&nbsp;
  <a
    href="https://github.com/contango-xyz/core-v2/tree/main/src/moneymarkets"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-[#DC940F]"
  >
    contango-xyz/core-v2 › src/moneymarkets
  </a>
</p>
  </div>
  )
}