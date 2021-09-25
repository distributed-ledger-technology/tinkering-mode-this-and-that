export interface IDeal {
    utcTime: string
    side: string
    asset: string
    reason: string
    reduceOnly: boolean
    equityBeforeThisDeal: number
}
export interface IAccountInfoCash {
    equity: number
    avaliableBalance: number
    longPositionSize: number
    longPositionPNLInPercent: number
    shortPositionSize: number
    shortPositionPNLInPercent: number
    longShortDeltaInPercent: number
    overallUnrealizedPNL: number
    dealHistory: IDeal[]
    botStatus: string
}
