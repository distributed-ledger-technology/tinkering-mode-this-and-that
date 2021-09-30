
import { Request } from 'https://deno.land/x/request@1.3.0/request.ts'


enum EEndpoints {
    "/getMe",
    "/getUpdates",
    "/sendMessage"
}

export class CashNotifier {

    private baseURL = "https://api.telegram.org/"
    private statisticsService: any

    public constructor(private dbConnectionURL: string, private botToken: string, private targetChatId: string) { }

    public flow() {

        setInterval(async () => {

            // const urlToGetData = `http://localhost:3001/getAssetsUnderManagement`
            const urlToGetData = `https://openforce.de/getAssetsUnderManagement`

            const response = await Request.get(urlToGetData)

            console.log(response)
            let message = ""
            let sum = 0

            for (const asset of response.aum) {

                message = `${message} \n${asset.apiKey}: equity: ${asset.equity.toFixed(2)} free: ${asset.avaliableBalance.toFixed(2)}`
                sum = sum + Number(asset.equity.toFixed(2))
            }

            message = `${message} \n sum: ${sum}`


            const urlToSendMessage = `${this.baseURL}bot${this.botToken}${EEndpoints[2]}?chat_id=${this.targetChatId}&text=${message}`

            console.log(`sending message via: ${urlToSendMessage}`)


            const responseSendMessage = await Request.get(urlToSendMessage)
            console.log(JSON.stringify(responseSendMessage))


            // }, 7000) // for development
        }, 3600 * 1 * 1000) // once in one hour
    }

}


const user = Deno.args[0]
const pw = Deno.args[1]
const botToken = Deno.args[2]
const targetChatId = Deno.args[3]


const dbConnectionURL = `mongodb://${user}:${pw}@65.21.110.40:27017`

const cash = new CashNotifier(dbConnectionURL, botToken, targetChatId)

cash.flow()
