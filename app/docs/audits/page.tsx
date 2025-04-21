export default function AuditsPage() {
  return (
    <>
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Audits</h1>
        <p className="mt-4 text-lg text-sticky-brown/80">
          Security audits and assessments of the STICKY.MONEY protocol.
        </p>
      </div>

      <div className="space-y-8">
        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Security Overview</h2>
          <p>
            STICKY.MONEY prioritizes security and has undergone multiple comprehensive audits by leading security firms
            in the blockchain industry. This page provides information about these audits and our ongoing security
            measures.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Completed Audits</h2>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-medium">Audit Firm Name</h3>
                <span className="text-sm bg-green-100 text-green-800 py-1 px-2 rounded">Completed</span>
              </div>
              <p className="text-sticky-brown/80 mt-2">
                Comprehensive audit of the core smart contracts, focusing on security vulnerabilities, code quality, and
                adherence to best practices. No critical issues were found.
              </p>
              <div className="mt-2">
                <a href="#" className="text-primary hover:underline flex items-center">
                  View Report
                </a>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-medium">Audit Firm Name</h3>
                <span className="text-sm bg-green-100 text-green-800 py-1 px-2 rounded">Completed</span>
              </div>
              <p className="text-sticky-brown/80 mt-2">
                Economic audit focusing on tokenomics, incentive mechanisms, and potential attack vectors. All
                identified issues have been addressed.
              </p>
              <div className="mt-2">
                <a href="#" className="text-primary hover:underline flex items-center">
                  View Report
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Ongoing Security Measures</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Bug Bounty Program</strong> - Rewards for identifying and reporting security vulnerabilities
            </li>
            <li>
              <strong>Regular Security Reviews</strong> - Continuous assessment of protocol security
            </li>
            <li>
              <strong>Multi-Signature Controls</strong> - Critical protocol functions require multiple approvals
            </li>
            <li>
              <strong>Timelock Mechanisms</strong> - Delay period for sensitive parameter changes
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Bug Bounty Program</h2>
          <p>
            STICKY.MONEY maintains an active bug bounty program to incentivize the responsible disclosure of security
            vulnerabilities. Rewards are based on the severity of the issue:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Severity</th>
                  <th className="py-2 text-left">Reward Range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Critical</td>
                  <td className="py-2">$50,000 - $100,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">High</td>
                  <td className="py-2">$10,000 - $50,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Medium</td>
                  <td className="py-2">$5,000 - $10,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Low</td>
                  <td className="py-2">$1,000 - $5,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  )
}
