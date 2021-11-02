
require('dotenv').config() // this ensures process.env. ... contains your .env file configuration values
const Web3 = require('web3');
import { vfPoolAbi } from "./vf-pool-abi"

export class VoFarmExecutor {

    private smartContractAddressOnRopsten = "0x72a415868095BA20b66dd3F231A46d8C784aE3B3"

    private web3: any
    private ourContract: any

    constructor() {
        this.web3 = new Web3(new Web3.providers.HttpProvider(process.env.PROVIDER_URL));
        this.ourContract = new this.web3.eth.Contract(vfPoolAbi, this.smartContractAddressOnRopsten)
    }

    public startInvestmentAdviceExecutionInterval() {

        setInterval(async () => {
            console.log(`executing investment Advice`)

            const result = await this.ourContract.methods.investmentStrat().call();

            console.log(result)

            // }, 2 * 60 * 1000)
        }, 2 * 1000)
    }
}

const instance = new VoFarmExecutor()

instance.startInvestmentAdviceExecutionInterval()