// import Web3 from 'web3';
// import { codeRegistryABI } from "../abis/code-registry-abi"
import Web3 from 'https://cdn.skypack.dev/web3'


const providerURL = Deno.args[0]

console.log(providerURL)
const web3Instance = new Web3(new Web3.providers.HttpProvider(process.env.PROVIDER_URL));


