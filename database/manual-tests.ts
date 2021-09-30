import { MongoService } from "./mongo-service.ts";
import { AccountInfoSchema, DealSchema } from "./interfaces.ts";



const deal: DealSchema = {
    _id: { $oid: "" },
    apiKey: "123",
    utcTime: "wtf",
    side: "buy",
    asset: "BTCUSDT",
    reason: "hot",
    reduceOnly: false,
    equityBeforeThisDeal: 100
}

const deal2: DealSchema = {
    _id: { $oid: "" },
    apiKey: "super",
    utcTime: "wtf2",
    side: "buy",
    asset: "BTCUSDT",
    reason: "hot",
    reduceOnly: false,
    equityBeforeThisDeal: 100
}

let mongoService = new MongoService()

try {

    await mongoService.dropCollection('deals')

} catch (error) {

    console.log(error.message)

}


await mongoService.saveDeal(deal)
await mongoService.saveDeal(deal2)

let readResult = await mongoService.readDeal('123')

console.log(readResult)




const accountInfo: AccountInfoSchema = {
    _id: { $oid: "" },
    apiKey: "12345",
    equity: 4.18981753,
    avaliableBalance: 2.86070141,
    longPositionSize: 0.002,
    longPositionPNLInPercent: -1.89,
    shortPositionSize: 0.001,
    shortPositionPNLInPercent: -6.3,
    longShortDeltaInPercent: 33.371068165278565,
    overallUnrealizedPNL: -3.358198394889522,
    botStatus: 'active',
}

const accountInfo2: AccountInfoSchema = {
    _id: { $oid: "" },
    apiKey: "hahaha",
    equity: 4.18981753,
    avaliableBalance: 2.86070141,
    longPositionSize: 0.002,
    longPositionPNLInPercent: -1.89,
    shortPositionSize: 0.001,
    shortPositionPNLInPercent: -6.3,
    longShortDeltaInPercent: 33.371068165278565,
    overallUnrealizedPNL: -3.358198394889522,
    botStatus: 'active',
}


try {

    await mongoService.dropCollection('accountInfos')

} catch (error) {

    console.log(error.message)

}


await mongoService.saveAccountInfo(accountInfo)
await mongoService.saveAccountInfo(accountInfo2)

readResult = await mongoService.readAccountInfo('12345')

console.log(readResult)

