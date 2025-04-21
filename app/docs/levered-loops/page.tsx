export default function LeveredLoopsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Levered Loops</h1>
        <p className="mt-4 text-lg text-sticky-brown/80">Guide to implementing levered loops using STICKY.MONEY.</p>
      </div>

      <div className="space-y-8">
        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">What are Levered Loops?</h2>
          <p>
            Levered loops (also known as recursive borrowing) is a strategy where you supply an asset as collateral,
            borrow the same asset, and then supply the borrowed amount as additional collateral. This process can be
            repeated multiple times to increase your exposure and potential yield.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">How Levered Loops Work</h2>
          <p>The basic process of implementing a levered loop is:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Supply an initial amount of an asset as collateral</li>
            <li>Borrow a portion of the same asset against your collateral</li>
            <li>Supply the borrowed amount as additional collateral</li>
            <li>Repeat steps 2-3 until you reach your desired leverage level</li>
          </ol>
          <p className="mt-2">
            Each loop increases your total supplied amount while also increasing your borrowed amount, effectively
            leveraging your position.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Benefits of Levered Loops</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Increased Yield</strong> - Earn supply interest on a larger amount than your initial capital
            </li>
            <li>
              <strong>Capital Efficiency</strong> - Make your capital work harder by recycling it multiple times
            </li>
            <li>
              <strong>Amplified Rewards</strong> - Receive more protocol incentives due to higher supply amounts
            </li>
            <li>
              <strong>Flexible Leverage</strong> - Adjust your leverage level based on market conditions and risk
              tolerance
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Risks and Considerations</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Liquidation Risk</strong> - Higher leverage means higher risk of liquidation if asset prices
              fluctuate
            </li>
            <li>
              <strong>Interest Rate Risk</strong> - If borrow rates exceed supply rates, the strategy may become
              unprofitable
            </li>
            <li>
              <strong>Gas Costs</strong> - Multiple transactions mean higher gas costs, which can eat into profits
            </li>
            <li>
              <strong>Complexity</strong> - Managing multiple loops requires careful tracking and monitoring of
              positions
            </li>
            <li>
              <strong>Protocol Risks</strong> - Smart contract vulnerabilities or protocol changes could affect your
              strategy
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Step-by-Step Implementation</h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Determine Your Initial Parameters</strong>
              <p>Before starting, decide on:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>The asset you want to loop (stablecoins are often used for lower volatility)</li>
                <li>Your target leverage ratio</li>
                <li>Your safety buffer above the liquidation threshold</li>
              </ul>
            </li>
            <li>
              <strong>Supply Initial Collateral</strong>
              <p>Connect your wallet to STICKY.MONEY and supply your initial amount of the chosen asset.</p>
            </li>
            <li>
              <strong>Execute the First Loop</strong>
              <p>Borrow a portion of the same asset (e.g., 70% of your supplied amount if the max LTV is 80%).</p>
            </li>
            <li>
              <strong>Supply the Borrowed Amount</strong>
              <p>Supply the borrowed tokens back as collateral.</p>
            </li>
            <li>
              <strong>Repeat for Additional Loops</strong>
              <p>
                Continue the process until you reach your target leverage or until the additional loops become too small
                to be worthwhile.
              </p>
            </li>
            <li>
              <strong>Monitor and Maintain</strong>
              <p>
                Regularly check your health factor and be prepared to add more collateral or repay part of your loan if
                market conditions change.
              </p>
            </li>
          </ol>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Example Calculation</h2>
          <div className="bg-muted p-4 rounded-md">
            <h3 className="font-medium">Stablecoin Loop Example:</h3>
            <p className="mt-2">Starting with 1,000 USDC and a maximum LTV of 80%:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Initial supply: 1,000 USDC</li>
              <li>First borrow (70% LTV): 700 USDC</li>
              <li>Total supplied after loop 1: 1,700 USDC</li>
              <li>Second borrow (70% of 700): 490 USDC</li>
              <li>Total supplied after loop 2: 2,190 USDC</li>
              <li>Third borrow (70% of 490): 343 USDC</li>
              <li>Total supplied after loop 3: 2,533 USDC</li>
              <li>... and so on</li>
            </ul>
            <p className="mt-2 text-sticky-brown/80">
              With an initial investment of 1,000 USDC, you could end up with approximately 3,333 USDC supplied
              (theoretical maximum with infinite loops at 70% LTV), earning supply interest and rewards on the full
              amount.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
