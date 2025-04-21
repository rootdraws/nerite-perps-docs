export default function VotingSupplyPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Voting: Supply</h1>
        <p className="mt-4 text-lg text-sticky-brown/80">Guide to voting on supply incentives in STICKY.MONEY.</p>
      </div>

      <div className="space-y-8">
        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Supply Voting Overview</h2>
          <p>
            STICKY.MONEY uses a democratic governance system that allows token holders to vote on which assets should
            receive supply incentives. This guide explains how to participate in supply voting.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">How Supply Voting Works</h2>
          <p>
            Each week, STICKY token holders vote on the allocation of incentives to different supply markets. The voting
            process works as follows:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Voting period opens every Thursday at 00:00 UTC</li>
            <li>Voters cast their votes for their preferred assets</li>
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
              <strong>Navigate to Supply Voting</strong>
              <p>Go to the "Governance" section and select "Supply Voting" from the menu.</p>
            </li>
            <li>
              <strong>Review Available Assets</strong>
              <p>
                You'll see a list of assets eligible for supply incentives, along with current APYs and total supply.
              </p>
            </li>
            <li>
              <strong>Cast Your Votes</strong>
              <p>
                Allocate your voting power across different assets. You can distribute your votes among multiple assets
                or concentrate them on a single asset.
              </p>
            </li>
            <li>
              <strong>Confirm Your Votes</strong>
              <p>Review your vote allocation and confirm the transaction in your wallet.</p>
            </li>
            <li>
              <strong>Monitor Results</strong>
              <p>
                After the voting period ends, you can check the results to see which assets will receive incentives for
                the coming week.
              </p>
            </li>
          </ol>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Voting Power</h2>
          <p>Your voting power is determined by:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The number of STICKY tokens you hold</li>
            <li>The number of SYRUP tokens you hold (staked STICKY)</li>
            <li>The duration of your stake (longer stakes = more voting power)</li>
          </ul>
          <p>The formula for calculating voting power is:</p>
          <pre className="bg-muted p-2 rounded-md overflow-x-auto">
            <code>Voting Power = STICKY balance + (SYRUP balance × Stake Multiplier)</code>
          </pre>
          <p>Where the Stake Multiplier depends on your staking duration:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Flexible staking: 1x</li>
            <li>30-day staking: 1.5x</li>
            <li>90-day staking: 2x</li>
            <li>180-day staking: 3x</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Tips for Effective Voting</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Research assets before voting to understand their potential and risks</li>
            <li>Consider market conditions and demand for different assets</li>
            <li>Look for assets with strong fundamentals and growth potential</li>
            <li>Check if there are any active bribes that might enhance your voting rewards</li>
            <li>Diversify your votes to spread risk and increase potential rewards</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
