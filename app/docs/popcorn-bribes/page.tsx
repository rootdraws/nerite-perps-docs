export default function PopcornBribesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">popCORN Bribes</h1>
        <p className="mt-4 text-lg text-sticky-brown/80">Understanding the popCORN bribe mechanism in STICKY.MONEY.</p>
      </div>

      <div className="space-y-8">
        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">What are popCORN Bribes?</h2>
          <p>
            popCORN Bribes are incentives offered to voters to direct their voting power toward specific assets or
            proposals within the STICKY.MONEY ecosystem. This mechanism allows for market-driven allocation of protocol
            resources and incentives.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">How popCORN Bribes Work</h2>
          <p>The popCORN bribe mechanism works as follows:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Projects or individuals create bribes to incentivize votes for specific assets</li>
            <li>Voters cast their votes according to their preferences, potentially influenced by bribes</li>
            <li>After the voting period ends, bribes are distributed to voters proportionally to their voting power</li>
            <li>The winning assets receive enhanced incentives from the protocol</li>
          </ol>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Benefits of popCORN Bribes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Market-Driven Incentives</strong> - Resources are allocated based on market demand
            </li>
            <li>
              <strong>Enhanced Voter Rewards</strong> - Voters receive additional rewards for participation
            </li>
            <li>
              <strong>Protocol Growth</strong> - Attracts new assets and users to the ecosystem
            </li>
            <li>
              <strong>Capital Efficiency</strong> - Optimizes the allocation of protocol incentives
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Creating a Bribe</h2>
          <p>To create a popCORN bribe:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Connect your wallet to the STICKY.MONEY platform</li>
            <li>Navigate to the Governance section</li>
            <li>Select the "Create Bribe" option</li>
            <li>Choose the asset or proposal you want to support</li>
            <li>Specify the amount and type of tokens for the bribe</li>
            <li>Confirm the transaction</li>
          </ol>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Claiming Bribes</h2>
          <p>After participating in a vote, you can claim your bribes:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Wait for the voting period to end</li>
            <li>Navigate to the Governance section</li>
            <li>Select the "Claim Bribes" option</li>
            <li>Choose the voting round for which you want to claim bribes</li>
            <li>Confirm the transaction to receive your rewards</li>
          </ol>
        </section>
      </div>
    </div>
  )
}
