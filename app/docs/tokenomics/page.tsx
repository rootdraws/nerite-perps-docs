export default function TokenomicsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Tokenomics</h1>
        <p className="mt-4 text-lg text-sticky-brown/80">Understanding the token economics of STICKY.MONEY.</p>
      </div>

      <div className="space-y-8">
        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Token Overview</h2>
          <p>
            The STICKY token is the native utility token of the STICKY.MONEY protocol. It serves multiple purposes
            within the ecosystem, including governance, incentives, and fee sharing.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Supply and Distribution</h2>
          <p>Total supply: 100,000,000 STICKY tokens</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Allocation</th>
                  <th className="py-2 text-left">Percentage</th>
                  <th className="py-2 text-left">Amount</th>
                  <th className="py-2 text-left">Vesting</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Community Rewards</td>
                  <td className="py-2">40%</td>
                  <td className="py-2">40,000,000</td>
                  <td className="py-2">Released over 4 years</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Team</td>
                  <td className="py-2">20%</td>
                  <td className="py-2">20,000,000</td>
                  <td className="py-2">1 year cliff, 3 year vesting</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Treasury</td>
                  <td className="py-2">20%</td>
                  <td className="py-2">20,000,000</td>
                  <td className="py-2">Controlled by governance</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Ecosystem Growth</td>
                  <td className="py-2">15%</td>
                  <td className="py-2">15,000,000</td>
                  <td className="py-2">Released over 3 years</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Initial Liquidity</td>
                  <td className="py-2">5%</td>
                  <td className="py-2">5,000,000</td>
                  <td className="py-2">Unlocked at launch</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Token Utility</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Governance</strong> - STICKY holders can vote on protocol changes and parameter updates
            </li>
            <li>
              <strong>Staking</strong> - Earn a share of protocol fees by staking STICKY tokens
            </li>
            <li>
              <strong>Liquidity Mining</strong> - Provide liquidity to earn additional STICKY rewards
            </li>
            <li>
              <strong>Fee Discounts</strong> - STICKY holders receive discounts on protocol fees
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Emission Schedule</h2>
          <p>
            STICKY tokens are emitted according to a predetermined schedule designed to ensure long-term sustainability
            of the protocol. The emission rate decreases over time to create scarcity and reward early adopters.
          </p>
        </section>
      </div>
    </div>
  )
}
