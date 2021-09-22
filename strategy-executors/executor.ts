export class Executor {


    public howMuchShallIAddToLongPosition(decisionBasis: any): Promise<number> | number {
        return 0
    }

    public howMuchShallIAddToShortPosition(decisionBasis: any): Promise<number> | number {
        return 0
    }

    public howMuchShallICloseFromLongPosition(decisionBasis: any): Promise<number> | number {
        return 0
    }

    public howMuchShallICloseFromShortPosition(decisionBasis: any): Promise<number> | number {
        return 0
    }
}