export default function GlossaryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Glossary</h1>
        <p className="mt-4 text-lg text-sticky-brown/80">
          Key terms and definitions used in the STICKY.MONEY ecosystem.
        </p>
      </div>

      <div className="space-y-8">
        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">A-C</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium">APY (Annual Percentage Yield)</h3>
              <p className="text-sticky-brown/80">
                The annualized rate of return on an investment, taking into account the effect of compounding.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">BSC (Binance Smart Chain)</h3>
              <p className="text-sticky-brown/80">
                A blockchain network developed by Binance that runs in parallel to the Binance Chain, designed to enable
                smart contract functionality with lower transaction costs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">BTCFi</h3>
              <p className="text-sticky-brown/80">
                Bitcoin-focused decentralized finance, referring to DeFi protocols and applications that involve Bitcoin
                or Bitcoin-pegged assets.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Collateral</h3>
              <p className="text-sticky-brown/80">
                Assets supplied to the protocol that secure borrowed assets. If the value of borrowed assets exceeds the
                allowed ratio to collateral, the position may be liquidated.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">D-L</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium">DAO (Decentralized Autonomous Organization)</h3>
              <p className="text-sticky-brown/80">
                An organization represented by rules encoded as a computer program that is transparent, controlled by
                organization members, and not influenced by a central government.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Flash Loan</h3>
              <p className="text-sticky-brown/80">
                A type of uncollateralized loan where the borrowed assets must be returned within the same transaction
                block.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Health Factor</h3>
              <p className="text-sticky-brown/80">
                A numeric representation of the safety of your deposited assets against the borrowed assets. The higher
                the value, the safer the state of your funds.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Liquidation</h3>
              <p className="text-sticky-brown/80">
                The process of selling a borrower's collateral to repay their loan when the collateral value falls below
                the required threshold.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">LTV (Loan-to-Value) Ratio</h3>
              <p className="text-sticky-brown/80">
                The ratio of the loan amount to the value of the collateral, expressed as a percentage.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">M-R</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium">MEV (Miner Extractable Value)</h3>
              <p className="text-sticky-brown/80">
                The value that miners can extract from users by manipulating the order of transactions within a block.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">OEV (Optimistic Execution Value)</h3>
              <p className="text-sticky-brown/80">
                Value captured through optimistic execution mechanisms in the protocol.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">popCORN Bribes</h3>
              <p className="text-sticky-brown/80">
                Incentives offered to voters to direct their voting power toward specific assets or proposals within the
                STICKY.MONEY ecosystem.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">S-Z</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium">STICKY</h3>
              <p className="text-sticky-brown/80">The native governance token of the STICKY.MONEY protocol.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">SYRUP</h3>
              <p className="text-sticky-brown/80">
                The staking receipt token for STICKY.MONEY, representing staked STICKY tokens.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Utilization Rate</h3>
              <p className="text-sticky-brown/80">
                The percentage of deposited funds that are currently being borrowed. Higher utilization typically leads
                to higher interest rates.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Yield Farming</h3>
              <p className="text-sticky-brown/80">
                The practice of staking or lending crypto assets to generate returns in the form of additional
                cryptocurrency.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
