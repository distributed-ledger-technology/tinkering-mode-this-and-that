import { Persistence } from "https://deno.land/x/persistence@v1.4.1/persistence.ts"
import { BybitConnector, IExchangeConnector } from "./deps.ts"

export interface IMonitoringConfig {
    apiKey: string
    apiSecret: string
    emergencyCloseAllEquityLimit: number
}

export class Backup {

    private monitoringConfigurations: IMonitoringConfig[] = []
    private pathToAccountsToBeMonitored = `${Deno.cwd()}/monitoring/.env.json`
    private exchangeConnectors: Map<string, IExchangeConnector>


    public constructor() {
        this.exchangeConnectors = new Map()
    }

    public async monitorAccounts(): Promise<void> {

        console.log(`reading accounts to be monitored from ${this.pathToAccountsToBeMonitored}`)

        this.monitoringConfigurations = JSON.parse(await Persistence.readFromLocalFile(this.pathToAccountsToBeMonitored))

        console.log(`starting to monitor ${this.monitoringConfigurations.length} accounts`)

        for (const monitoringConfiguration of this.monitoringConfigurations) {
            await this.monitorAccount(monitoringConfiguration)
        }

    }


    private async monitorAccount(accountConfig: IMonitoringConfig): Promise<void> {

        console.log(`monitoring ${accountConfig.apiKey} - would close if equity < ${accountConfig.emergencyCloseAllEquityLimit}`)

        let exchangeConnector = this.exchangeConnectors.get(accountConfig.apiKey)

        if (exchangeConnector === undefined) {
            exchangeConnector = new BybitConnector(accountConfig.apiKey, accountConfig.apiSecret)
            this.exchangeConnectors.set(accountConfig.apiKey, exchangeConnector)
        }

        const accountInfo = await exchangeConnector.getFuturesAccountData()
        console.log(accountInfo)
        if (accountInfo.ret_code !== 0 || (!(accountInfo.result.USDT.equity > 0))) throw new Error(`r u kidding me?`) // also in case the exchange api delivers shit

        const positions = await exchangeConnector.getPositions()

        if (accountInfo.result.USDT.equity < accountConfig.emergencyCloseAllEquityLimit) {

            for (const position of positions) {
                console.log(`closing ${position.data.size} ${position.data.symbol} ${position.data.Side}`)

            }
        }


    }

}
