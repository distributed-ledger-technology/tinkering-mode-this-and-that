import { json, opine, serveStatic } from "https://deno.land/x/opine@1.7.0/mod.ts"
import { opineCors } from "https://deno.land/x/cors@v1.2.1/mod.ts";
import { Service } from "./service.ts"
import { BybitConnector } from "../utilities/exchange-connectors/bybit-connector.ts";
import { IDeal } from "./interfaces.ts";
import { Persistence } from "https://deno.land/x/persistence@v1.4.1/persistence.ts";

const app = opine()

app.use(opineCors()) // decided to do this for single routes explicitely

const pathToFile = `${Deno.cwd()}/client/dist`
app.use(serveStatic(pathToFile))
app.use(json());

const statisticsService = new Service()

let pathToStats = ''

if (Deno.args[0] === '3001') {
    pathToStats = `${Deno.cwd()}/stats/`
} else {
    pathToStats = `${Deno.cwd()}/../deno-cash/cash/stats`
}

app.get("/", async function (req, res) {


    console.log(pathToFile)
    res.sendFile(`${pathToFile}/index.html`)

})

// http://localhost:3001/getAccountInfo/apiKey/GCNuPXHiTsX5FTEDhV
app.get("/getAccountInfo/apiKey/:apiKey", opineCors(), async function (req, res) {
    console.log(`reading account info for ${req.params.apiKey}`)
    try {
        res.send(await statisticsService.getAccountInfo(req.params.apiKey, pathToStats));
    } catch (error) {
        res.send("Bitte füge Deinen API Key am Ende der URL ein, um Deine Daten abzurufen.")
    }
})

app.post("/addToPosition", opineCors(), async function (req, res) {

    const pathToDataFile = `${`${Deno.cwd()}/stats`}/${req.body.apiKey}.json`

    const accountInfoCash = JSON.parse(await Persistence.readFromLocalFile(pathToDataFile))

    if (accountInfoCash === undefined || accountInfoCash.dealHistory === undefined) {
        throw new Error(`I do not know you.`)
    }

    console.log(`adding ${req.body.amount} to BTC ${req.body.side} for ${req.body.apiKey} ${req.body.apiSecret}`)
    // console.log(`adding to position ${JSON.stringify(await req.body)}`)

    const bybitConnector = new BybitConnector(req.body.apiKey, req.body.apiSecret)

    let result
    if (req.body.side === 'long') {
        result = await bybitConnector.buyFuture(`BTCUSDT`, req.body.amount, false)
    } else if (req.body.side === 'short') {
        result = await bybitConnector.sellFuture(`BTCUSDT`, req.body.amount, false)
    }

    console.log(result)

    if (result.ret_code === 0) {

        console.log(accountInfoCash)
        const accountInfo = await bybitConnector.getFuturesAccountData()

        const deal: IDeal = {
            utcTime: new Date().toISOString(),
            side: 'Sell',
            reduceOnly: false,
            reason: `manually triggered deal via ${req.protocol + '://' + req.get('host') + req.originalUrl}`,
            asset: 'BTCUSDT',
            equityBeforeThisDeal: accountInfo.result.USDT.equity

        }

        accountInfoCash.dealHistory.splice(0, accountInfoCash.dealHistory.length - 100)


        accountInfoCash.dealHistory.push(deal)

        void Persistence.saveToLocalFile(pathToDataFile, JSON.stringify(accountInfoCash))

    }

})


if (Deno.args[0] === '443') {

    const cert = await Deno.readTextFile(`/etc/letsencrypt/live/openforce.de/fullchain.pem`)
    const key = await Deno.readTextFile(`/etc/letsencrypt/live/openforce.de/privkey.pem`)
    console.log(cert.length)
    console.log(key.length)

    const options = {
        port: Number(Deno.args[0]),
        certFile: "/etc/letsencrypt/live/openforce.de/fullchain.pem",
        keyFile: "/etc/letsencrypt/live/openforce.de/privkey.pem"
    }

    app.listen(options, () => console.log(`server has started on http://localhost:${Deno.args[0]} 🚀`))

} else {

    app.listen(Number(Deno.args[0]), () => console.log(`server has started on http://localhost:${Deno.args[0]} 🚀`))

}



