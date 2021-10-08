import { VolatilityFarmer } from "https://deno.land/x/exchange_connectors@v1.4.1/mod-volatility-farmer.ts"
import { Registry } from "https://deno.land/x/injector@v1.1.0/mod.ts"
import { InvestmentAdvisor } from "https://deno.land/x/exchange_connectors@v1.4.1/src/volatility-farming/investment-advisor/investment-advisor.ts"
import { InvestmentAdvisorETHLong } from "https://deno.land/x/exchange_connectors@v1.4.0/src/volatility-farming/investment-advisor/alternative-investment-advisors/investment-advisor-eth-long.ts"
import { BybitConnector } from "https://deno.land/x/exchange_connectors@v1.4.1/mod-bybit.ts";
import { MongoService } from "https://deno.land/x/exchange_connectors@v1.4.1/src/volatility-farming/volatility-farmer/persistency/mongo-service.ts";
import { IExchangeConnector } from "https://deno.land/x/exchange_connectors@v1.4.1/src/interfaces/exchange-connector-interface.ts";
import { IPersistenceService } from "https://deno.land/x/exchange_connectors@v1.4.1/src/volatility-farming/volatility-farmer/persistency/interfaces.ts";


// get parameters
const apiKey = Deno.args[0]
const apiSecret = Deno.args[1]
const dbUser = Deno.args[2]
const dbPW = Deno.args[3]
const investmentAdvisorClassName = (Deno.args[4] === undefined) ? "InvestmentAdvisor" : Deno.args[4]
const exchangeConnectorClassName = (Deno.args[5] === undefined) ? "BybitConnector" : Deno.args[5]
const persistenceServiceClassName = (Deno.args[6] === undefined) ? "MongoService" : Deno.args[6]


// Dependent On Components Handling
const registryInvestmentAdvisors = new Registry()
const registryExchangeConnectors = new Registry()
const registryPersistenceServices = new Registry()

registryInvestmentAdvisors.register(InvestmentAdvisorETHLong)
registryInvestmentAdvisors.register(InvestmentAdvisor)
registryExchangeConnectors.register(BybitConnector)
registryPersistenceServices.register(MongoService)

const exchangeConnector: IExchangeConnector = new (registryExchangeConnectors.get(exchangeConnectorClassName))(apiKey, apiSecret)
const persistenceService: IPersistenceService = new (registryPersistenceServices.get(persistenceServiceClassName))(`mongodb://${dbUser}:${dbPW}@65.21.110.40:27017`)
const investmentAdvisor: InvestmentAdvisor = new (registryInvestmentAdvisors.get(investmentAdvisorClassName))(apiKey, persistenceService)


// Dependency Injection via constructor injection
const volatilityFarmer: VolatilityFarmer = new VolatilityFarmer(apiKey, apiSecret, exchangeConnector, investmentAdvisor, persistenceService)


// start farming interval - farming each 4 seconds
const intervalLengthInSeconds = 4
volatilityFarmer.farm(intervalLengthInSeconds)

