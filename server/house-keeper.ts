import { MongoService } from "../deps.ts";

export class HouseKeeper {

    private mongoService: MongoService

    public constructor(mongodbConnectionString: string) {
        this.mongoService = new MongoService(mongodbConnectionString)
    }

    public async keepHouse(): Promise<void> {

        // await this.deleteOldAccountSpecificData()

        setInterval(async () => {

            try {
                await this.deleteOldAccountSpecificData()
            } catch (error) {
                console.log(`I could not keep the house: ${error.message}`)
            }

        }, 2 * 60 * 60 * 1000);
    }

    private async deleteOldAccountSpecificData(): Promise<void> {

        const accounts = await this.mongoService.readAccountInfo()

        for (const account of accounts) {
            console.log(account.apiKey)
            await MongoService.deleteOldLogEntries(this.mongoService, account.apiKey)
            await MongoService.deleteOldDealEntries(this.mongoService, account.apiKey, 432)
        }

    }

}
