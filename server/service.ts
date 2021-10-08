import { MongoService } from "https://deno.land/x/exchange_connectors@v1.4.0/src/volatility-farming/volatility-farmer/persistency/mongo-service.ts"
import { DealSchema } from "../database/interfaces.ts"
import { BybitConnector } from "https://deno.land/x/exchange_connectors@v0.2.0/mod-bybit.ts";


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

        console.log(apiKey)
        const accountInfoFromDB = await this.mongoService.readDeals(apiKey)

        return accountInfoFromDB

    }

    public async getLogs(apiKey: string): Promise<any[]> {

        const accountInfoFromDB = await this.mongoService.readLogs(apiKey)

        return accountInfoFromDB

    }

    public async getAssetsUnderManagement(): Promise<any> {

        const accountInfoFromDB = await this.mongoService.readAccountInfo()

        return accountInfoFromDB

    }


    public async addToPosition(apiKey: string, apiSecret: string, action: string, amount: number, reason: string) {

        console.log(`${action} for BTC for ${apiKey} ${apiSecret}`)

        const bybitConnector = new BybitConnector(apiKey, apiSecret)

        let result
        if (action === 'long') {
            result = await bybitConnector.buyFuture(`BTCUSDT`, amount, false)
        } else if (action === 'short') {
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
                action,
                reduceOnly: false,
                reason,
                asset: 'BTCUSDT',
                equityBeforeThisDeal: accountInfo.result.USDT.equity

            }

            await this.mongoService.saveDeal(deal)

        }
    }
    public async reducePosition(apiKey: string, apiSecret: string, action: string, amount: number, reason: string) {

        console.log(`${action} from BTC for ${apiKey} ${apiSecret}`)

        const bybitConnector = new BybitConnector(apiKey, apiSecret)

        let result

        if (action === 'reducelong') {
            result = await bybitConnector.sellFuture(`BTCUSDT`, amount, true)
        } else if (action === 'reduceshort') {
            result = await bybitConnector.buyFuture(`BTCUSDT`, amount, true)
        }

        console.log(`${action} - ${JSON.stringify(result)}`)

        if (result.ret_code === 0) {

            this.exchangeConnector = new BybitConnector(apiKey, apiSecret)

            const accountInfo = await this.exchangeConnector.getFuturesAccountData()

            const deal: DealSchema = {
                _id: { $oid: "" },
                apiKey,
                utcTime: new Date().toISOString(),
                action,
                reduceOnly: false,
                reason,
                asset: 'BTCUSDT',
                equityBeforeThisDeal: accountInfo.result.USDT.equity

            }

            await this.mongoService.saveDeal(deal)

        }
    }

}
