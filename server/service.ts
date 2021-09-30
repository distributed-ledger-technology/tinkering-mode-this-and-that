import { Persistence } from "https://deno.land/x/persistence@1.1.0/persistence.ts"
import { MongoService } from "../database/mongo-service.ts"
import { AccountInfoSchema, DealSchema } from "../database/interfaces.ts"
import { IExchangeConnector, BybitConnector } from "https://deno.land/x/exchange_connectors@v0.2.0/mod-bybit.ts";


export class Service {

    private mongoService: MongoService
    private exchangeConnector: any

    public constructor(mongoDBConnectionString: string) {
        this.mongoService = new MongoService(mongoDBConnectionString)
    }

    public async getAccountInfo(apiKey: string): Promise<any> {

        const accountInfoFromDB = await this.mongoService.readAccountInfo(apiKey)

        return accountInfoFromDB

    }

    public async getDeals(apiKey: string): Promise<any[]> {

        const accountInfoFromDB = await this.mongoService.readDeals(apiKey)

        return accountInfoFromDB

    }

    public async getAssetsUnderManagement(): Promise<any> {

        const accountInfoFromDB = await this.mongoService.readAccountInfo()

        return accountInfoFromDB

    }


    public async addToPosition(apiKey: string, apiSecret: string, side: string, amount: number, reason: string) {

        // const pathToDataFile = `${`${Deno.cwd()}/../deno-cash/cash/stats`}/${apiKey}.json`

        // const accountInfoCash = JSON.parse(await Persistence.readFromLocalFile(pathToDataFile))

        // if (accountInfoCash === undefined || accountInfoCash.dealHistory === undefined) {
        //     throw new Error(`I do not know you.`)
        // }

        console.log(`adding ${amount} to BTC ${side} for ${apiKey} ${apiSecret}`)

        const bybitConnector = new BybitConnector(apiKey, apiSecret)

        let result
        if (side === 'long') {
            result = await bybitConnector.buyFuture(`BTCUSDT`, amount, false)
        } else if (side === 'short') {
            result = await bybitConnector.sellFuture(`BTCUSDT`, amount, false)
        }

        console.log(result)

        if (result.ret_code === 0) {

            this.exchangeConnector = new BybitConnector(apiKey, apiSecret)

            const accountInfo = await this.exchangeConnector.getFuturesAccountData()

            const deal: DealSchema = {
                _id: { $oid: "" },
                apiKey,
                utcTime: new Date().toISOString(),
                side,
                reduceOnly: false,
                reason,
                asset: 'BTCUSDT',
                equityBeforeThisDeal: accountInfo.result.USDT.equity

            }

            await this.mongoService.saveDeal(deal)

            // accountInfoCash.dealHistory.splice(0, accountInfoCash.dealHistory.length - 100)


            // accountInfoCash.dealHistory.push(deal)

            // void Persistence.saveToLocalFile(pathToDataFile, JSON.stringify(accountInfoCash))

        }
    }

}
