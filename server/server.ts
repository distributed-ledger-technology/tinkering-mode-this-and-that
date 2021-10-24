import { json, opine, serveStatic } from "../deps.ts"
import { opineCors } from "../deps.ts";
import { Service } from "./service.ts"
import { HouseKeeper } from "./house-keeper.ts";
import { MonitoringService } from "../monitoring/monitoring-service.ts";

const app = opine()

app.use(opineCors()) // decided to do this for single routes explicitely

const pathToFile = `${Deno.cwd()}/client/dist`
app.use(serveStatic(pathToFile)) // redirecting until the move to the decentralized page provisioning is completed
app.use(json());

let service: Service

let mongodbConnectionString = ''

app.get("/", async function (req, res) {

    // res.redirect('https://ethereum.org') // redirecting until the move to the decentralized page provisioning is completed
    console.log(pathToFile)
    res.sendFile(`${pathToFile}/index.html`)

})

// http://localhost:3001/getAccountInfo/apiKey/GCNuPXHiTsX5FTEDhV
app.get("/getAccountInfo/apiKey/:apiKey", opineCors(), async function (req, res) {
    console.log(`reading account info for ${req.params.apiKey}`)
    try {
        res.send(await service.getAccountInfo(req.params.apiKey));
    } catch (error) {
        res.send("Bitte füge Deinen API Key am Ende der URL ein, um Deine Daten abzurufen.")
    }
})

// http://localhost:3001/getDeals/apiKey/GCNuPXHiTsX5FTEDhV
app.get("/getDeals/apiKey/:apiKey", opineCors(), async function (req, res) {
    console.log(`reading deals for ${req.params.apiKey}`)
    try {
        res.send(await service.getDeals(req.params.apiKey));
    } catch (error) {
        res.send(`wtf :) ${error.message}`)
    }
})

// http://localhost:3001/getOSCBalance/walletAddress/0x7A915e362353d72570dcf90aa5BAA1C5B341c7AA
app.get("/getOSCBalance/walletAddress/:walletAddress", opineCors(), async function (req, res) {
    console.log(`reading OSC Balance for ${req.params.walletAddress}`)
    try {
        res.send(await service.getOSCBalance(req.params.apiKey));
    } catch (error) {
        res.send(`wtf :) ${error.message}`)
    }
})

// http://localhost:3001/getLogs/apiKey/LrOBK76cwtcaetdcxo
app.get("/getLogs/apiKey/:apiKey", opineCors(), async function (req, res) {
    console.log(`reading logs for ${req.params.apiKey}`)
    try {
        res.send(await service.getLogs(req.params.apiKey));
    } catch (error) {
        res.send(`wtf :) ${error.message}`)
    }
})

// http://localhost:3001/getAssetsUnderManagementDemoAccounts
app.get("/getAssetsUnderManagementDemoAccounts", opineCors(), async function (req, res) {

    try {
        const assetsUnderManagement = await service.getAssetsUnderManagement()
        let equitySum = 0
        let longPosSum = 0
        let shortPosSum = 0
        for (const asset of assetsUnderManagement) {
            equitySum = equitySum + asset.equity
            longPosSum = longPosSum + asset.longPositionSize
            shortPosSum = shortPosSum + asset.shortPositionSize

        }
        res.send({ equitySum, longPosSum, shortPosSum, aum: assetsUnderManagement });
    } catch (error) {
        res.send("Shit Happened :)")
    }
})

app.post("/addToPosition", opineCors(), async function (req, res) {

    const reason = `manually triggered deal via ${req.protocol + '://' + req.get('host') + req.originalUrl}`

    await service.addToPosition(req.body.apiKey, req.body.apiSecret, req.body.action, req.body.amount, reason)

})

app.post("/reducePosition", opineCors(), async function (req, res) {

    const reason = `manually triggered deal via ${req.protocol + '://' + req.get('host') + req.originalUrl}`

    await service.reducePosition(req.body.apiKey, req.body.apiSecret, req.body.action, req.body.amount, reason)

})

app.post("/reset", opineCors(), async function (req, res) {

    const reason = `reset triggered after equity transfer`

    await service.reset(req.body.apiKey, reason)

})

const mongoUser = Deno.args[1]
const mongoPW = Deno.args[2]

if (mongoUser === undefined || mongoPW === undefined) {
    throw new Error("Are you kidding me?")
}

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


    mongodbConnectionString = `mongodb://${mongoUser}:${mongoPW}@localhost:27017`

    console.log(mongodbConnectionString)
    service = new Service(mongodbConnectionString)
    app.listen(options, () => console.log(`server has started on http://localhost:${Deno.args[0]} 🚀`))

} else {

    // mongodbConnectionString = `mongodb://${mongoUser}:${mongoPW}@localhost:27017`
    mongodbConnectionString = `mongodb://${mongoUser}:${mongoPW}@65.21.110.40:27017`
    console.log(mongodbConnectionString)
    service = new Service(mongodbConnectionString)
    app.listen(Number(Deno.args[0]), () => console.log(`server has started on http://localhost:${Deno.args[0]} 🚀`))

}


try {
    const houseKeeper = new HouseKeeper(mongodbConnectionString)
    void houseKeeper.keepHouse()
} catch (error) {
    console.log(`the housekeeper detected the error: "${error.message}"`)
}

try {
    const monitoringService = new MonitoringService()

    setInterval(async () => {
        void monitoringService.monitorAccounts()
    }, 1000 * 5)

} catch (error) {
    console.log(`the monitoringService detected the error: "${error.message}"`)
}

