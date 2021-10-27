# Volatility Farming - VoFarm

A peer 2 peer approach to increase price stability and to reduce price manipulation by exploiting non-fundamentals-based volatility while leveraging and optimizing Uniswap V3.

## Assumptions
1. A high percentage of the average volatility is induced by manipulation - not fundamentals  
2. Manual and individual trading does not add much value to society, nature, culture and the well-being of individuals   
3. So called "retail traders" loose money to those who have the power to manipulate markets in classical trading infrastructures    
4. Introducing "**flexible** concentrated capital" is economically more reasonable now due to layer 2 scaling solutions like Arbitrum   
5. Volatility Farming at scale has the potential to increase price stability by exploiting non-fundamentals based volatility   
6. VoFarm Pools - leveraging Uniswap V3 - can bring the algo- trading community ([hummingbot](https://hummingbot.io/), [coinrule](https://coinrule.com/), ...) to a new level (benefitting from volatility AND trading volume)  
7. It is a good idea to increase freedom for individuals as more than 51 % of individuals are fair and reasonable people  

## How the VoFarm Works
Each VoFarm Capital Pool is defined as a smart contract which also defines a VoFarm strategy.   

Each specific VoFarm Pool Smart Contract inherits from the VFPool template "is VFPool" ....  
The only function which shall be implemented specifically is getCurrentInvestmentAdvice().

An investment advice can e.g. recommend to:  
1. Execute a [Single Swap](https://docs.uniswap.org/protocol/guides/swaps/single-swaps)   
2. [Increase or Decrease Liquidity](https://docs.uniswap.org/protocol/guides/providing-liquidity/increase-liquidity)   
3. Hedge against price change risk as Liquidity Provider - for volatile assets e.g. in 0.3 % fee tier 

### Example VoFarm Strategies
#### ETH Price Prediction Based Strategies
The following example implementation optimizes capital efficiencies around ETH/DAI by basically applying the following moves:  
1. If ETH price is about to trade sideways --> be an all in 50/50 ETH/DAI [Liquidity Provider](https://docs.uniswap.org/protocol/guides/providing-liquidity/increase-liquidity)   
2. If ETH price is about to rise quickly and significantly --> be an ETH Holder (helping users to avoid ["impermanent loss"](https://finematics.com/impermanent-loss-explained/))   
3. If ETH price is about to drop quickly and significantly --> be a DAI Holder (preparing to buy back into the game at the right time)  

#### Uniswap V3 Fee Calculator Based Strategies
The following example implementation leverages the [Uniswap V3 Fee Calculator](https://uniswapv3.flipsidecrypto.com/) to apply "**flexible** concentrated capital" optimization:  
tbd

#### Hedge Based Strategies 
The risk of price changes (aka risk for "impernanent loss" (which might be better called "opportunity cost")) is something which currently prevents many liquidity providers from "going all in" to their specific range. An unopinionated hedge mechanism can neutralize this risk. Its assumption is that it does not know if prices go up or down but that prices go up AND down frequently - compare [Roulette Martingale Strategy](https://www.youtube.com/watch?v=KiIe2LFue5s). 

### Capital Efficiency Transparency
People can check the **VoFarm Strategy Explorer** to learn about each strategy and its historic capital efficiency to decide into which pool / strategy they want to invest.  

### Details
People can invest an arbitrary amount of Ether to the pool / strategy of their choice and receive a reward depending on the success of the pool which they have chosen proportional to the amount of Ether which they have invested. 

The wallet which deployed the smart contract defining the specific vf pool + strategy, earns a percentage (defined in the smart contract) of the pool's gains to reward the developer who deployed the corresponding smart contract. This also incentivices developers to come up with better and better strategies etc. 

To keep things safe and simple the strategy of a specific pool can never be changed. To bet on a different strategy one can move one's capital from one pool to another - ... thanks to layer 2 scaling (e.g. via Arbitrum).


## Incentive Engineering
The incentives shall be aligned along decentralization, fairness, simple market access, transparency, ever improving capital efficiencies and wise investments for public goods.     


## Grants 
We continue developing the solution without direct rewards or grants. If we would receive any grants for this project, we would invest it into dedicated, wisely chosen VoFarm Pools - just like the users of the VoFarm would do. We think this is a good signal - encouraging users to try it out - as we as the development team believe in the success of the VoFarm. We would only withdraw gains which where generated out of those grants as a reward for our work. We are currently figuring out how this can be ensured algorithmically via the corresponding VFPool smart contract.  

## Outlook
The volatility farming project requires for successful strategies. Therefore the optimization of vf strategies is a long term endeavour to which the whole open source community is invited.  

In order to support developers in coming up with many different successful strategies (which is good for the overall stability), we want to provide features like: 

1. simulation mode / back testing - leveraging e.g. the [Uniswap V3 Fee Calculator](https://uniswapv3.flipsidecrypto.com/)      
2. simplified connection to oracles which reveal fundamentals at early stages   
3. automated security audits for new pools / strategies before we list them in our VoFarm Strategy Explorer   
4. optimize the incentive structure to encourage the exploration of new technologies which can not only serve financial improvements but also ecological improvements. 
