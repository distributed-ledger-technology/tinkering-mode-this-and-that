import { MongoService } from "../deps.ts";

export class HouseKeeper {

    private mongoService: MongoService

    public constructor(mongodbConnectionString: string) {
        this.mongoService = new MongoService(mongodbConnectionString)
    }

    public keepHouse() {

        setInterval(async () => {

            const accounts = await this.mongoService.readAccountInfo()

            for (const account of accounts) {
                console.log(account.apiKey)
                await MongoService.deleteOldLogEntries(this.mongoService, account.apiKey)
            }

        }, 2 * 60 * 60 * 1000);
    }
}
