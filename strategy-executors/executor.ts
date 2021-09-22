import { IExchangeConnector } from '../utilities/exchange-connectors/exchange-connector-interface.ts'
import { IDecisionBasis } from "./interfaces.ts";


export class Executor {

    private readonly pair = 'BTCUSDT' // can be made flexible soon
    private decisionBasis: IDecisionBasis

    public constructor(private exchangeConnector: IExchangeConnector) {
        this.decisionBasis = { data: { longShorDelta: 10, liquidityLevel: 5 } } // just to have an example for now
    }


    public async executeStrategy(decisionBasis: IDecisionBasis): Promise<void> {

        const howMuchToAddToLongPosition = await this.howMuchShallIAddToLongPosition(decisionBasis)
        if (howMuchToAddToLongPosition > 0) {
            await this.exchangeConnector.buyFuture(this.pair, howMuchToAddToLongPosition, false)
        }

        const howMuchToAddToShortPosition = await this.howMuchShallIAddToLongPosition(decisionBasis)
        if (howMuchToAddToShortPosition > 0) {
            await this.exchangeConnector.sellFuture(this.pair, howMuchToAddToShortPosition, false)
        }

        const howMuchToCloseFromLongPosition = await this.howMuchShallIAddToLongPosition(decisionBasis)
        if (howMuchToCloseFromLongPosition > 0) {
            await this.exchangeConnector.sellFuture(this.pair, howMuchToCloseFromLongPosition, true)
        }

        const howMuchToCloseFromShortPosition = await this.howMuchShallIAddToLongPosition(decisionBasis)
        if (howMuchToCloseFromShortPosition > 0) {
            await this.exchangeConnector.buyFuture(this.pair, howMuchToCloseFromShortPosition, true)
        }

    }


    public howMuchShallIAddToLongPosition(decisionBasis: IDecisionBasis): Promise<number> | number {
        return 0
    }

    public howMuchShallIAddToShortPosition(decisionBasis: IDecisionBasis): Promise<number> | number {
        return 0
    }

    public howMuchShallICloseFromLongPosition(decisionBasis: IDecisionBasis): Promise<number> | number {
        return 0
    }

    public howMuchShallICloseFromShortPosition(decisionBasis: IDecisionBasis): Promise<number> | number {
        return 0
    }

}