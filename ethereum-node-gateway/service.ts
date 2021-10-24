
require('dotenv').config() // this ensures process.env. ... contains your .env file configuration values
const Web3 = require('web3');
import { codeRegistryABI } from "./abis/code-registry-abi"


export class CodeRegistryService {

    // private smartContractAddressOnMainnet = "tbd"
    private smartContractAddressOnRopsten = "0x67F46a918a730f1EcdD787Fe15910814a97F2aa0"

    private web3
    private ourContract

    // console.log(ourContract.methods)


    public constructor() {
        this.web3 = new Web3(new Web3.providers.HttpProvider(process.env.PROVIDER_URL));
        this.ourContract = new this.web3.eth.Contract(codeRegistryABI, this.smartContractAddressOnRopsten)
    }

    public async getOSCBalance(walletAddress: string): Promise<number> {
        const oscBalance = await this.ourContract.methods.getOSCBalance(walletAddress).call();

        return oscBalance
    }

    public async getContent(programmingLanguage: string, topicArea: string, name: string, version: string): Promise<string> {

        console.log(`reading content from ethereum blockchain from for ${programmingLanguage}, ${topicArea}, ${name}, ${version} `)

        console.log(await this.ourContract.methods)

        const content = await this.ourContract.methods.getContent(programmingLanguage, topicArea, name, version).call();
        console.log(`the content is ${content} `)

        return content

    }

    public async getLatestVersion(): Promise<string> {
        const latestVersion = await this.ourContract.methods.getLatestVersion().call();
        console.log(`the latest version is: ${latestVersion} `)

        return latestVersion
    }

}


const instance = new CodeRegistryService()

setTimeout(async () => {
    await instance.getContent('TypeScript', 'tutorials', 'hello-world.ts', 'v0.0.1')
}, 2 * 1000);