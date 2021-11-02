
// require('dotenv').config() // this ensures process.env. ... contains your .env file configuration values
// const Web3 = require('web3');
import Web3 from 'https://github.com/ntrotner/web3-deno/raw/main/packages/web3/src/index.js'
import { vfPoolAbi } from "./vf-pool-abi.ts"

export class VoFarmExecutor {

    private smartContractAddressOnRopsten = "0x72a415868095BA20b66dd3F231A46d8C784aE3B3"

    private web3: any
    private ourContract: any

    constructor(providerURL: string) {
        this.web3 = new Web3(new (Web3 as any).providers.HttpProvider(providerURL));
        this.ourContract = new this.web3.eth.Contract(vfPoolAbi, this.smartContractAddressOnRopsten)
    }

    public startInvestmentAdviceExecutionInterval() {

        // setInterval(async () => {
        //     console.log(`executing investment Advice`)

        //     const result = await this.ourContract.methods.investmentStrat().call();

        //     console.log(result)

        //     // }, 2 * 60 * 1000)
        // }, 2 * 1000)
    }
}

const providerURL = Deno.args[0]

console.log(providerURL)

const instance = new VoFarmExecutor(providerURL)

instance.startInvestmentAdviceExecutionInterval()
