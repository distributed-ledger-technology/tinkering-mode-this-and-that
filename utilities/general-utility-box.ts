import { hmac } from "../deps.ts"

export class UtilityBox {

    public static getHMACFromQuery(query: any, secret: string) {

        return hmac("sha256", secret, query, "utf8", "hex")

    }

}


