import { MongoClient, Database } from "https://deno.land/x/mongo/mod.ts"
import { AccountInfoSchema, DealSchema } from "./interfaces.ts"


export class MongoService {

    private static initialized = false
    private static client = new MongoClient()
    private static db: Database
    private static accountInfosCollection: any
    private static dealCollection: any


    public static async initialize(connectionURL: string) {

        await MongoService.client.connect(connectionURL)

        MongoService.db = MongoService.client.database("openforce")

        MongoService.accountInfosCollection = MongoService.db.collection<AccountInfoSchema>("accountInfos")
        MongoService.dealCollection = MongoService.db.collection<DealSchema>("deals")

        console.log(MongoService.db)

        MongoService.initialized = true

    }


    public async dropCollection(collectionName: string, connectionURL: string = "mongodb://localhost:27017"): Promise<any> {

        if (!MongoService.initialized) await MongoService.initialize(connectionURL)

        const collectionToBeDropped = MongoService.db.collection<AccountInfoSchema>(collectionName)

        await collectionToBeDropped.drop()

    }


    public async saveDeal(deal: DealSchema, connectionURL: string = "mongodb://localhost:27017"): Promise<any> {

        if (!MongoService.initialized) await MongoService.initialize(connectionURL)


        const insertId = await MongoService.dealCollection.insertOne({
            apiKey: deal.apiKey,
            utcTime: deal.utcTime,
            side: deal.side,
            asset: deal.asset,
            reason: deal.reason,
            reduceOnly: deal.reduceOnly,
            equityBeforeThisDeal: deal.equityBeforeThisDeal
        })

        return insertId

    }


    public async readDeal(apiKey?: string, connectionURL: string = "mongodb://localhost:27017"): Promise<any | any[]> {

        if (!MongoService.initialized) await MongoService.initialize(connectionURL)

        if (apiKey === undefined) {
            return MongoService.dealCollection.find({}).toArray()
        }

        return MongoService.dealCollection.findOne({ apiKey: "123" })

    }


    public async saveAccountInfo(accountInfo: AccountInfoSchema, connectionURL: string = "mongodb://localhost:27017"): Promise<any> {

        if (!MongoService.initialized) await MongoService.initialize(connectionURL)

        const insertId = await MongoService.accountInfosCollection.insertOne({
            apiKey: accountInfo.apiKey,
            equity: accountInfo.equity,
            avaliableBalance: accountInfo.avaliableBalance,
            longPositionSize: accountInfo.longPositionSize,
            longPositionPNLInPercent: accountInfo.longPositionPNLInPercent,
            shortPositionSize: accountInfo.shortPositionSize,
            shortPositionPNLInPercent: accountInfo.shortPositionPNLInPercent,
            longShortDeltaInPercent: accountInfo.longShortDeltaInPercent,
            overallUnrealizedPNL: accountInfo.overallUnrealizedPNL,
            botStatus: accountInfo.botStatus
        })

        return insertId

    }


    public async readAccountInfo(apiKey?: string, connectionURL: string = "mongodb://localhost:27017"): Promise<any | any[]> {

        if (!MongoService.initialized) await MongoService.initialize(connectionURL)

        if (apiKey === undefined) {
            return MongoService.accountInfosCollection.find({}).toArray()
        }

        const entry = await MongoService.accountInfosCollection.findOne({ apiKey })

        if (entry === undefined) {
            return { message: `I could not find any data for ${apiKey}` }
        }

        return entry

    }

}