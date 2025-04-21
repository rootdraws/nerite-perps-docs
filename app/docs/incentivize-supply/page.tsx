export default function IncentivizeSupplyPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Incentivize Supply</h1>
        <p className="mt-4 text-lg text-sticky-brown/80">
          Understanding how STICKY.MONEY incentivizes liquidity supply.
        </p>
      </div>

      <div className="space-y-8">
        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Supply Incentives Overview</h2>
          <p>
            STICKY.MONEY uses a unique incentive mechanism to ensure deep liquidity for BTCFi on Binance Smart Chain.
            This page explains how these incentives work and how you can benefit from them.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">How It Works</h2>
          <p>
            The supply incentive mechanism works through a combination of token rewards, fee sharing, and governance
            benefits. Here's a breakdown of the key components:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Token Rewards</strong> - Liquidity providers earn STICKY tokens based on their supply
            </li>
            <li>
              <strong>Fee Distribution</strong> - A portion of protocol fees is distributed to suppliers
            </li>
            <li>
              <strong>Governance Rights</strong> - Suppliers gain voting power in protocol decisions
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Reward Calculation</h2>
          <p>
            Rewards are calculated based on the amount supplied, duration of supply, and current protocol parameters.
            The formula takes into account:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Supply amount and asset type</li>
            <li>Time period of supply</li>
            <li>Current utilization rate</li>
            <li>Protocol-wide incentive multipliers</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Maximizing Your Returns</h2>
          <p>To maximize your returns as a liquidity provider, consider these strategies:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Supply assets with higher demand</li>
            <li>Participate in governance to earn additional rewards</li>
            <li>Take advantage of special incentive periods</li>
            <li>Consider long-term supply commitments for boosted rewards</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
