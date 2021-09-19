import { Persistence } from "https://deno.land/x/persistence@1.1.0/persistence.ts";

export class StatisticsService {

    public async getAccountInfo(apiKey: string): Promise<any> {

        const accountInfo = await Persistence.readFromLocalFile(`${Deno.cwd()}/stats/${apiKey}.json`)

        console.log(accountInfo)
        return accountInfo

    }

}
