# Contango: Longs

Q: How do Levered Longs work on Nerite?
A: A Nerite Integration would be needed in the Contango v2 Money Markets repo. Contango has the capacity to build directional loops through bundling flash loans and swaps into a single transaction. Contango v2 also has contracts built out for position management.

1. Flash Loan.
2. Deposit Collateral into Nerite.
3. Mint USND.
4. Swap in USND/USDC Pool.
5. Swap in USDC/Collateral Pool.
6. Deposit more Collateral, and Mint more USND -- to the specifications of the user. 
7. To close the loop, mint USND to pay back the flash loan.

Contango cPerps replicate a directionally long perps position by stacking leveraged exposure of collateral within Nerite.

[IMAGE] - Levered Long Flow

Q: What development work is necessary to build Levered Longs? 
A: The Contango v2 contracts have a folder which is called Money Markets: 

moneymarkets
├── comet
│   ├── dependencies
│   │   ├── IComet.sol
│   │   └── ICometRewards.sol
│   ├── CometMoneyMarket.sol
│   ├── CometMoneyMarketView.sol
│   └── CometReverseLookup.sol
├── euler
├── interfaces
├── morpho
├── BaseMoneyMarket.sol
├── BaseMoneyMarketView.sol
├── ContangoLens.sol
├── ImmutableBeaconProxy.sol
├── Liquidations.sol
├── UnderlyingPositionFactory.sol
└── UpgradeableBeaconWithOwner.sol

* [src/moneymarkets](https://github.com/contango-xyz/core-v2/tree/main/src/moneymarkets)

A /nerite folder would need to be created here, which connects the Contango contracts with Liquity v2 contracts. 

Q: What specific contracts need to be modified / created to integrate a Nerite Extension to facilitate Longs through Contango? 
A: This is a problem which would need to be solved by CupOJoseph and the Contango team, either by building a Nerite Extension, or through a friendly fork. 

# Contango: Shorts

Q: How do Levered Shorts work on Nerite? 
A: Users would form Levered Shorts through Euler Markets, not Nerite contracts -- though the Nerite Frontend could have a Trading UI, which allowed shorts to be accessed through Euler Liquidity. 

Here's how Contango cPerp Shorts Work: 

1. Flash Loan.
2. Deposit USDC Collateral into Euler.
3. Borrow DebtAsset you are Shorting.
4. Swap in USDC/DebtAsset pool.
5. Deposit more USDC Collateral, and borrow more DebtAsset -- to the specifications of the user. 
7. To close the loop, pay the USDC to the Flash Loan, instead of adding more collateral. 

Contango cPerps replicate a directionally short perps position by stacking leveraged exposure of short-sells within Euler.

[IMAGE] - Levered Short Flow

Q: What development work is necessary to build Levered Shorts: 
A: No additional development work is needed to make this functional.

Q: What Euler Markets must be deployed? 
A: Nerite is immutable, which means that new assets cannot be listed. 

A fully functional cPerps integration would require Euler Markets with supply for the following assets: 

- ETH
- wstETH
- rETH
- rsETH
- wsETH
- ARB
- COMP
- tBTC

Liquidity Deal Partnerships can be formed with each of these assets, providing Borrow Capaicty in Euler Markets which are curated by AlphaGrowth. 

[IMAGE] - Liquidity Deal Partnerships

# Chainlink SVR: Sustainable Incentives

[IMAGE] - Sustainable Incentives Flow

Q: How does Chainlink SVR create sustainable incentives for Nerite Perps? 
A: While Long Liquidations are absorbed into the Nerite Stability Pool -- there is room for capturing OEV on Euler Markets through Chainlink SVR Feeds. 

When Short Positions are liquidated, Chainlink SVR Feeds will be able to capture value that would have otherwise been leaked to validators. This income will be split between Chainlink, and an Incentives Fund to subsidize more Borrows on those Euler Markets. 

SVR integration means that Borrow Costs will decrease for Shorts, after Shorts have been liquidated.

Q: Why is directional leverage necessary for SVR? 
A: The majority of onchain leverage are Levered Loops, and those typically use Exchange Rate Oracles to reduce the threat of liquidation during depeg events -- as there are trust assumptions that these depeg events will only last as long as the withdraw queue for pulling out the underlying assets in those LSTs / LRTs.

Directional Leverage is necessary if you want to build a business model around OEV, because users are taking risk with leverage in the form of potential liquidation. 

Chainlink SVR therefore needs: 

1. Directional Risk being Taken on Money Markets with SVR Feeds. 
2. Compelling Trading UX which cycles SVR value back to users.

# Chainlink CRE: Liquidation Amplitude Datastream & Automation

[IMAGE] - Liquidation Amplitude Datastream

Q: What strategic value is there in measuring the amplitude of widespread liquidation events? 
A: In measuring the severity of systemic liquidation events, you can get a pulse of the market's state of pain in the form of forced market buys or sells. 

Liquidation Aggregation Data currently exists on Analytics sites: 

- [Coinglass](https://www.coinglass.com/LiquidationData)
- [Coinalize](https://coinalyze.net/bitcoin/liquidations/)
- [Velo Liquidation Aggregate Indicator](https://velo.xyz/chart) 

Chainlink CRE will make this data actionable, providing traders with a real edge for directional leverage.

Q: How do you create a CRE Flow that optimizes entries for Levered positions?
A: A custom DataFeed would be assembled through CRE as follows: 

1. APIs for Liquidated Longs and Shorts would be gathered from CEXs like Binance and Bybit, specifically for BTC.
2. Data would be pulled and computed every 5 minutes from these APIs.
3. While the heartbeat of this DataStream would be every 5 minutes, the sum of the data would also be processed on an Hourly Basis.
4. CRE would store the Maximal Values for Longs and Shorts, and those values would update existentially.
5. Max Values are set to +10 or -10.
6. Zero represents no liquidations. 
7. The resulting datafeed would be a "Liquidation Seismograph" which oscilates between -10 and +10, depending on the severity of the liquidations for BTC within that Hour. 

### "The Liquidation Seismograph" Data Stream:
=======================
+10  [Range +10 represents the max historical amount for liquidated Shorts for a specific asset.]


-- 0 [0 represents no liquidations.]


-10  [Range -10 represents the max historical amount for liquidated Longs for a specific asset.]
=======================

Q: Why is the Heartbeat set at 5m, when the Increments are 1H?
A: 5m heartbeats allow for limit orders to be executed within 5 minutes of the liquidations hitting a target -- such as 200M in Longs liquidated within the last Hour. 

If the measurements were only set on the hour, it would be more difficult for automated limit orders to execute at the the bottom of a 200M liquidated candle. The automations based on this datastream are intended to provide traders with a better UX, by giving them a method of fulfilling limit orders based on the amount of pain in the market, rather than a price feed.

[IMAGE] - 5m Heartbeat with 1H increments

# Chainlink CRE: Redemptions Optimizer Datastream & Automation

[IMAGE] - Nerite Redemptions:

Q: How do Nerite Redemptions work? 
A: 

[IMAGE] - Redemptions Datastream

Q: How do you create a CRE Flow that maximizes value for Redemptions? 
A: 

Q: How does the Redemptions Optimizer Datastream improve UX?


# Problems

Q: USND / USDC LP needs to be much deeper to accomodate slippage in frequent flash loan swaps.
A: 



# Cost / Benefit Analysis

Q: What are the costs for Automation, Compute, CRE? 
A: 

Q: What are the cost differences between 5m and 1m heartbeats for Datastreams? 
A: 

