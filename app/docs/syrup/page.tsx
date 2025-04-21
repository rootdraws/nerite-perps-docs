export default function SyrupPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">SYRUP</h1>
        <p className="mt-4 text-lg text-sticky-brown/80">Understanding SYRUP, the staking mechanism of STICKY.MONEY.</p>
      </div>

      <div className="space-y-8">
        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">What is SYRUP?</h2>
          <p>
            SYRUP is the staking receipt token for STICKY.MONEY. When users stake their STICKY tokens, they receive
            SYRUP tokens in return, which represent their staked position and entitle them to various benefits within
            the ecosystem.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">How SYRUP Works</h2>
          <p>The SYRUP staking mechanism works as follows:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Users stake STICKY tokens in the protocol</li>
            <li>They receive SYRUP tokens at a 1:1 ratio</li>
            <li>SYRUP tokens accrue value over time through fee distribution</li>
            <li>SYRUP can be redeemed for the original STICKY plus accrued rewards</li>
          </ol>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Benefits of Holding SYRUP</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Fee Sharing</strong> - SYRUP holders receive a portion of protocol fees
            </li>
            <li>
              <strong>Boosted Rewards</strong> - Increased rewards for liquidity provision
            </li>
            <li>
              <strong>Governance Weight</strong> - Enhanced voting power in governance decisions
            </li>
            <li>
              <strong>Access to Special Features</strong> - Exclusive access to certain protocol features
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Staking Periods</h2>
          <p>STICKY.MONEY offers different staking periods for SYRUP, each with its own benefits:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Staking Period</th>
                  <th className="py-2 text-left">Reward Multiplier</th>
                  <th className="py-2 text-left">Early Withdrawal Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Flexible</td>
                  <td className="py-2">1x</td>
                  <td className="py-2">None</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">30 days</td>
                  <td className="py-2">1.2x</td>
                  <td className="py-2">2%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">90 days</td>
                  <td className="py-2">1.5x</td>
                  <td className="py-2">3%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">180 days</td>
                  <td className="py-2">2x</td>
                  <td className="py-2">5%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}
