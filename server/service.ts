import { Persistence } from "https://deno.land/x/persistence@1.1.0/persistence.ts";

export class Service {

    public async getAccountInfo(apiKey: string, pathToStats: string): Promise<any> {

        const accountInfo = await Persistence.readFromLocalFile(`${pathToStats}/${apiKey}.json`)

        // console.log(accountInfo)
        return accountInfo

    }

    public async addToPosition(apiKey: string, apiSecret: string, amount: number) {

    }

}
