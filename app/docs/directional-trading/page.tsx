export default function DirectionalTradingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Directional Trading</h1>
        <p className="mt-4 text-lg text-sticky-brown/80">Guide to directional trading strategies using STICKY.MONEY.</p>
      </div>

      <div className="space-y-8">
        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">What is Directional Trading?</h2>
          <p>
            Directional trading involves taking positions based on your market outlook—whether you expect prices to rise
            (bullish) or fall (bearish). STICKY.MONEY's lending protocol can be used to implement various directional
            trading strategies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Bullish Strategies</h2>
          <p>If you have a bullish outlook on a particular asset, you can use the following strategies:</p>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="text-xl font-medium">Leveraged Long Position</h3>
              <p className="text-sticky-brown/80 mt-2">
                Increase your exposure to an asset you believe will appreciate in value.
              </p>
              <ol className="list-decimal pl-6 space-y-2 mt-2">
                <li>Supply a stable asset as collateral (e.g., USDC)</li>
                <li>Borrow the target asset you're bullish on (e.g., BTC)</li>
                <li>Swap the borrowed asset for more of the target asset</li>
                <li>If the price increases as expected, sell a portion to repay the loan and keep the profit</li>
              </ol>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="text-xl font-medium">Yield Farming with Bullish Exposure</h3>
              <p className="text-sticky-brown/80 mt-2">
                Earn yield while maintaining exposure to an appreciating asset.
              </p>
              <ol className="list-decimal pl-6 space-y-2 mt-2">
                <li>Supply the asset you're bullish on as collateral</li>
                <li>Borrow stable assets against your collateral</li>
                <li>Use the borrowed stables in yield farming opportunities</li>
                <li>Maintain your exposure to the appreciating collateral while earning yield on borrowed funds</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Bearish Strategies</h2>
          <p>If you have a bearish outlook on a particular asset, you can use the following strategies:</p>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="text-xl font-medium">Short Selling</h3>
              <p className="text-sticky-brown/80 mt-2">Profit from a decrease in an asset's price.</p>
              <ol className="list-decimal pl-6 space-y-2 mt-2">
                <li>Supply stable assets as collateral (e.g., USDC)</li>
                <li>Borrow the asset you're bearish on (e.g., ETH)</li>
                <li>Sell the borrowed asset for stablecoins</li>
                <li>
                  If the price decreases as expected, buy back the asset at a lower price to repay the loan and keep the
                  difference as profit
                </li>
              </ol>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="text-xl font-medium">Hedging Existing Positions</h3>
              <p className="text-sticky-brown/80 mt-2">Protect your portfolio against potential market downturns.</p>
              <ol className="list-decimal pl-6 space-y-2 mt-2">
                <li>Supply the asset you want to hedge as collateral</li>
                <li>Borrow the same asset</li>
                <li>Sell the borrowed asset for stablecoins</li>
                <li>
                  If the asset price falls, the loss on your collateral is offset by the gain on your short position
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Risk Management</h2>
          <p>
            Directional trading strategies involve significant risks. Here are some risk management practices to
            consider:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Maintain a Safe Collateral Ratio</strong> - Always keep your loan-to-value ratio well below the
              liquidation threshold
            </li>
            <li>
              <strong>Use Stop-Loss Orders</strong> - Set stop-loss orders on external exchanges to limit potential
              losses
            </li>
            <li>
              <strong>Diversify Strategies</strong> - Don't put all your capital into a single directional bet
            </li>
            <li>
              <strong>Monitor Market Conditions</strong> - Stay informed about market trends and be prepared to adjust
              your strategy
            </li>
            <li>
              <strong>Consider Partial Profit-Taking</strong> - Take profits gradually as the market moves in your favor
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Example Scenario</h2>
          <div className="bg-muted p-4 rounded-md">
            <h3 className="font-medium">Bullish BTC Strategy Example:</h3>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li>Supply 10,000 USDC as collateral</li>
              <li>With a 70% LTV, borrow up to 7,000 USDC worth of BTC</li>
              <li>Swap the borrowed BTC for more BTC, increasing your exposure</li>
              <li>If BTC price increases by 20%, your position gains value</li>
              <li>Sell a portion of BTC to repay the loan, keeping the remaining profit</li>
            </ol>
            <p className="mt-2 text-sticky-brown/80">
              Note: This example is simplified and doesn't account for fees, interest rates, or potential price
              slippage.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
