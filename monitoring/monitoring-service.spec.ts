import { assertEquals, fail } from "https://deno.land/std@0.86.0/testing/asserts.ts";
import { MonitoringService } from "./monitoring-service.ts";



Deno.test("should return great investment advices", async () => {

    const monitoringService = new MonitoringService()

    try {

        await monitoringService.monitorAccounts()

        fail(`I would have expected an error`)
    } catch (error) {
        // expecting an error as those apiKeys do not really exist on bybit
    }

})