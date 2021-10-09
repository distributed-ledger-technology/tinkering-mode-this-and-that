import { MongoService } from "../deps.ts";

export class HouseKeeper {

    private mongoService: MongoService

    public constructor(mongodbConnectionString: string) {
        this.mongoService = new MongoService(mongodbConnectionString)
    }

    public keepHouse() {

        setInterval(async () => {

            try {

                const accounts = await this.mongoService.readAccountInfo()

                for (const account of accounts) {
                    console.log(account.apiKey)
                    await MongoService.deleteOldLogEntries(this.mongoService, account.apiKey)
                    await MongoService.deleteOldDealEntries(this.mongoService, account.apiKey)
                }
            } catch (error) {
                console.log(`I could not keep the house`)
            }

        }, 2 * 60 * 60 * 1000);
    }
}
