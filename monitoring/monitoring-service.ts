import { Persistence } from "https://deno.land/x/persistence@v1.4.1/persistence.ts"
import { BybitConnector, IExchangeConnector } from "./deps.ts"

export interface IMonitoringConfig {
    apiKey: string
    apiSecret: string
    emergencyCloseAllEquityLimit: number
    minBTC: number
    minETH: number
}

export class MonitoringService {

    private monitoringConfigurations: IMonitoringConfig[] = []
    private pathToAccountsToBeMonitored = `${Deno.cwd()}/monitoring/.env.json`
    private exchangeConnectors: Map<string, IExchangeConnector>


    public constructor() {
        this.exchangeConnectors = new Map()
    }

    public async monitorAccounts(): Promise<void> {

        console.log(`reading accounts to be monitored from ${this.pathToAccountsToBeMonitored}`)
        this.monitoringConfigurations = JSON.parse(await Persistence.readFromLocalFile(this.pathToAccountsToBeMonitored))
        console.log(`monitoring ${this.monitoringConfigurations.length} accounts`)
        for (const monitoringConfiguration of this.monitoringConfigurations) {
            await this.monitorAccount(monitoringConfiguration)
        }


    }


    private async monitorAccount(monitoringConfig: IMonitoringConfig): Promise<void> {

        console.log(`monitoring ${monitoringConfig.apiKey} - would close if equity < ${monitoringConfig.emergencyCloseAllEquityLimit}`)

        let exchangeConnector = this.exchangeConnectors.get(monitoringConfig.apiKey)

        if (exchangeConnector === undefined) {
            exchangeConnector = new BybitConnector(monitoringConfig.apiKey, monitoringConfig.apiSecret)
            this.exchangeConnectors.set(monitoringConfig.apiKey, exchangeConnector)
        }

        const accountInfo = await exchangeConnector.getFuturesAccountData()

        if (accountInfo.ret_code !== 0 || (!(accountInfo.result.USDT.equity > 0))) throw new Error(`r u kidding me?`) // also in case the exchange api delivers shit

        const positions = await exchangeConnector.getPositions()

        if (accountInfo.result.USDT.equity < monitoringConfig.emergencyCloseAllEquityLimit || accountInfo.result.USDT.available_balance === 0) {

            for (const position of positions) {
                await this.reducePosition(position, monitoringConfig, exchangeConnector)

            }
        }
    }

    protected async reducePosition(position: any, monitoringConfig: IMonitoringConfig, exchangeConnector: IExchangeConnector): Promise<void> {
        let amount = 0

        if (position.data.symbol !== 'BTCUSDT') amount = monitoringConfig.minBTC
        if (position.data.symbol !== 'ETHUSDT') amount = monitoringConfig.minETH

        if (position.data.size - amount > amount) {

            console.log(`reducing ${position.data.size} ${position.data.symbol} ${position.data.side}`)

            if (position.data.side === 'Buy') {
                await exchangeConnector.sellFuture(position.data.symbol, amount, true)
            }

            if (position.data.side === 'Sell') {
                await exchangeConnector.buyFuture(position.data.symbol, amount, true)
            }

        }

    }

}
