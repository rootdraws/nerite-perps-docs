export default function VotingBorrowsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Voting: Borrows</h1>
        <p className="mt-4 text-lg text-sticky-brown/80">Guide to voting on borrow incentives in STICKY.MONEY.</p>
      </div>

      <div className="space-y-8">
        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Borrow Voting Overview</h2>
          <p>
            In addition to supply incentives, STICKY.MONEY also allows token holders to vote on borrow incentives. This
            guide explains how to participate in borrow voting.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">How Borrow Voting Works</h2>
          <p>
            Borrow voting follows a similar process to supply voting, but focuses on allocating incentives to borrowers
            rather than suppliers. The voting process works as follows:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Voting period opens every Thursday at 00:00 UTC</li>
            <li>Voters cast their votes for their preferred borrow markets</li>
            <li>Voting closes on Sunday at 23:59 UTC</li>
            <li>Results are tallied and new incentives are implemented on Monday</li>
          </ol>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Step-by-Step Voting Guide</h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Connect Your Wallet</strong>
              <p>Visit the STICKY.MONEY governance portal and connect your wallet containing STICKY tokens.</p>
            </li>
            <li>
              <strong>Navigate to Borrow Voting</strong>
              <p>Go to the "Governance" section and select "Borrow Voting" from the menu.</p>
            </li>
            <li>
              <strong>Review Available Markets</strong>
              <p>
                You'll see a list of assets eligible for borrow incentives, along with current borrow rates and total
                borrowed.
              </p>
            </li>
            <li>
              <strong>Cast Your Votes</strong>
              <p>
                Allocate your voting power across different borrow markets. You can distribute your votes among multiple
                markets or concentrate them on a single market.
              </p>
            </li>
            <li>
              <strong>Confirm Your Votes</strong>
              <p>Review your vote allocation and confirm the transaction in your wallet.</p>
            </li>
            <li>
              <strong>Monitor Results</strong>
              <p>
                After the voting period ends, you can check the results to see which borrow markets will receive
                incentives for the coming week.
              </p>
            </li>
          </ol>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Why Vote for Borrow Incentives?</h2>
          <p>Voting for borrow incentives is important for several reasons:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Increased Protocol Usage</strong> - Incentivizing borrowing increases overall protocol activity
            </li>
            <li>
              <strong>Higher Utilization Rates</strong> - More borrowing leads to higher utilization of supplied assets
            </li>
            <li>
              <strong>Better Yields for Suppliers</strong> - Higher utilization typically results in better yields for
              suppliers
            </li>
            <li>
              <strong>Market Efficiency</strong> - Balanced incentives between supply and borrow create a more efficient
              market
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Strategic Voting Considerations</h2>
          <p>When voting for borrow incentives, consider the following factors:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Current utilization rates of different markets</li>
            <li>Market demand for borrowing specific assets</li>
            <li>Potential for arbitrage opportunities that might drive borrowing</li>
            <li>Risk profiles of different assets</li>
            <li>
              Complementary supply incentives (markets with high supply incentives might benefit from balanced borrow
              incentives)
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
