export default function SecurityPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Security</h1>
        <p className="mt-4 text-lg text-muted-foreground">Security measures, audit reports, and contract addresses</p>
      </div>

      <div className="space-y-8">
        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Security Measures</h2>
          <p>YourProtocol takes security seriously and has implemented the following measures:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Comprehensive security audits by leading firms</li>
            <li>Bug bounty program</li>
            <li>Time-locked admin controls</li>
            <li>Multi-signature wallets for critical operations</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Audit Reports</h2>
          <p>YourProtocol has been audited by the following security firms:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Audit Firm 1</strong> -{" "}
              <a href="#" className="text-primary hover:underline">
                View Report
              </a>
            </li>
            <li>
              <strong>Audit Firm 2</strong> -{" "}
              <a href="#" className="text-primary hover:underline">
                View Report
              </a>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Contract Addresses</h2>
          <p>The following are the official contract addresses for YourProtocol:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Contract</th>
                  <th className="py-2 text-left">Network</th>
                  <th className="py-2 text-left">Address</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Token Contract</td>
                  <td className="py-2">Ethereum</td>
                  <td className="py-2">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      0x1234...5678
                    </code>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Staking Contract</td>
                  <td className="py-2">Ethereum</td>
                  <td className="py-2">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      0xabcd...efgh
                    </code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}
