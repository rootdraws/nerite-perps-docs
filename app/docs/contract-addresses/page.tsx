export default function ContractAddressesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Contract Addresses</h1>
        <p className="mt-4 text-lg text-sticky-brown/80">
          Official smart contract addresses for the STICKY.MONEY protocol.
        </p>
      </div>

      <div className="space-y-8">
        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Core Contracts</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Contract Name</th>
                  <th className="py-2 text-left">Address</th>
                  <th className="py-2 text-left">Network</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">STICKY Token</td>
                  <td className="py-2">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      0x1234...5678
                    </code>
                  </td>
                  <td className="py-2">Binance Smart Chain</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">SYRUP Token</td>
                  <td className="py-2">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      0xabcd...efgh
                    </code>
                  </td>
                  <td className="py-2">Binance Smart Chain</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Lending Pool</td>
                  <td className="py-2">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      0x2345...6789
                    </code>
                  </td>
                  <td className="py-2">Binance Smart Chain</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Governance</td>
                  <td className="py-2">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      0x3456...7890
                    </code>
                  </td>
                  <td className="py-2">Binance Smart Chain</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Auxiliary Contracts</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Contract Name</th>
                  <th className="py-2 text-left">Address</th>
                  <th className="py-2 text-left">Network</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Fee Distributor</td>
                  <td className="py-2">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      0x4567...8901
                    </code>
                  </td>
                  <td className="py-2">Binance Smart Chain</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Treasury</td>
                  <td className="py-2">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      0x5678...9012
                    </code>
                  </td>
                  <td className="py-2">Binance Smart Chain</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Staking</td>
                  <td className="py-2">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      0x6789...0123
                    </code>
                  </td>
                  <td className="py-2">Binance Smart Chain</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Bribe Factory</td>
                  <td className="py-2">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      0x7890...1234
                    </code>
                  </td>
                  <td className="py-2">Binance Smart Chain</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Verification</h2>
          <p>All STICKY.MONEY contracts are verified on BscScan. You can verify the authenticity of a contract by:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Checking that the address matches the ones listed on this official documentation</li>
            <li>Confirming the contract is verified on BscScan</li>
            <li>Reviewing the contract code and ensuring it matches our GitHub repository</li>
          </ol>
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
            <p className="text-yellow-800 font-medium">Security Warning</p>
            <p className="text-yellow-700 mt-1">
              Always verify contract addresses before interacting with them. Scammers may create fake contracts with
              similar names. The official contracts will always be listed on this documentation page and our official
              social media channels.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
