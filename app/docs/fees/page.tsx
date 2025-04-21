export default function FeesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Fees</h1>
        <p className="mt-4 text-lg text-sticky-brown/80">Understanding the fee structure in STICKY.MONEY.</p>
      </div>

      <div className="space-y-8">
        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Fee Overview</h2>
          <p>
            STICKY.MONEY implements a transparent and fair fee structure designed to maintain protocol sustainability
            while providing competitive rates for users. This page outlines the various fees within the protocol and how
            they are utilized.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Fee Types</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Fee Type</th>
                  <th className="py-2 text-left">Amount</th>
                  <th className="py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Borrow Fee</td>
                  <td className="py-2">0.1% - 0.5%</td>
                  <td className="py-2">One-time fee charged when borrowing assets</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Interest Rate</td>
                  <td className="py-2">Variable</td>
                  <td className="py-2">Ongoing interest charged on borrowed assets</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Withdrawal Fee</td>
                  <td className="py-2">0.05%</td>
                  <td className="py-2">Fee charged when withdrawing supplied assets</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Flash Loan Fee</td>
                  <td className="py-2">0.09%</td>
                  <td className="py-2">Fee for using flash loans</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Liquidation Fee</td>
                  <td className="py-2">5% - 10%</td>
                  <td className="py-2">Fee charged during liquidation events</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Fee Distribution</h2>
          <p>Fees collected by the protocol are distributed as follows:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>70%</strong> - Distributed to SYRUP stakers
            </li>
            <li>
              <strong>20%</strong> - Added to the protocol treasury
            </li>
            <li>
              <strong>10%</strong> - Used for buyback and burn of STICKY tokens
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Fee Discounts</h2>
          <p>Users can receive discounts on fees by:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Holding STICKY tokens in their wallet</li>
            <li>Staking STICKY tokens for SYRUP</li>
            <li>Providing liquidity to specific pools</li>
            <li>Maintaining a high loyalty score</li>
          </ul>
          <p>Discount tiers are based on the amount of STICKY tokens held or staked:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Tier</th>
                  <th className="py-2 text-left">STICKY Required</th>
                  <th className="py-2 text-left">Discount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Bronze</td>
                  <td className="py-2">100</td>
                  <td className="py-2">10%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Silver</td>
                  <td className="py-2">1,000</td>
                  <td className="py-2">20%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Gold</td>
                  <td className="py-2">10,000</td>
                  <td className="py-2">30%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Platinum</td>
                  <td className="py-2">100,000</td>
                  <td className="py-2">50%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}
