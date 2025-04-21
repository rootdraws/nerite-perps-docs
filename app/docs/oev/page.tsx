export default function OEVPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">OEV (Optimistic Execution Value)</h1>
        <p className="mt-4 text-lg text-sticky-brown/80">Understanding Optimistic Execution Value in STICKY.MONEY.</p>
      </div>

      <div className="space-y-8">
        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">What is OEV?</h2>
          <p>
            Optimistic Execution Value (OEV) refers to the value that can be extracted from the ordering and inclusion
            of transactions in a blockchain. In STICKY.MONEY, we utilize OEV mechanisms to enhance protocol efficiency
            and distribute additional value to stakeholders.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">How OEV Works in STICKY.MONEY</h2>
          <p>STICKY.MONEY implements OEV through several mechanisms:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>MEV Capture</strong> - The protocol captures a portion of the MEV (Miner Extractable Value)
              generated from its operations
            </li>
            <li>
              <strong>Optimistic Execution</strong> - Transactions are executed optimistically to reduce latency and
              improve user experience
            </li>
            <li>
              <strong>Value Distribution</strong> - Captured value is distributed to STICKY stakers and liquidity
              providers
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Benefits of OEV</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Enhanced returns for protocol participants</li>
            <li>Reduced transaction costs for users</li>
            <li>Improved capital efficiency</li>
            <li>Protection against front-running and other MEV attacks</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">OEV Distribution</h2>
          <p>The OEV captured by the protocol is distributed as follows:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Recipient</th>
                  <th className="py-2 text-left">Percentage</th>
                  <th className="py-2 text-left">Distribution Method</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">SYRUP Stakers</td>
                  <td className="py-2">50%</td>
                  <td className="py-2">Proportional to staked amount</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Liquidity Providers</td>
                  <td className="py-2">30%</td>
                  <td className="py-2">Proportional to liquidity provided</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Protocol Treasury</td>
                  <td className="py-2">20%</td>
                  <td className="py-2">Controlled by governance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}
