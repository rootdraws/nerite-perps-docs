export default function GuidesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Guides</h1>
        <p className="mt-4 text-lg text-muted-foreground">Step-by-step guides to help you interact with YourProtocol</p>
      </div>

      <div className="space-y-8">
        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Getting Started</h2>
          <p>Follow these steps to get started with YourProtocol:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Connect your wallet to [blockchain]</li>
            <li>Acquire [token] from [exchanges or sources]</li>
            <li>Visit the YourProtocol app at [URL]</li>
            <li>Connect your wallet to the app</li>
          </ol>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Providing Liquidity</h2>
          <p>Instructions for providing liquidity to the protocol:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Navigate to the "Liquidity" section</li>
            <li>Select the pool you want to provide liquidity to</li>
            <li>Enter the amount of tokens you want to deposit</li>
            <li>Confirm the transaction in your wallet</li>
          </ol>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Staking</h2>
          <p>Instructions for staking your tokens:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Navigate to the "Stake" section</li>
            <li>Enter the amount of tokens you want to stake</li>
            <li>Choose your staking duration (if applicable)</li>
            <li>Confirm the transaction in your wallet</li>
          </ol>
        </section>
      </div>
    </div>
  )
}
