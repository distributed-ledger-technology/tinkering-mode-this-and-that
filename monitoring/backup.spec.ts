import { assertEquals, fail } from "https://deno.land/std@0.86.0/testing/asserts.ts";
import { Backup } from "./backup.ts";



Deno.test("should return great investment advices", async () => {

    const objectUnderTest = new Backup()

    try {

        await objectUnderTest.monitorAccounts()

        fail(`I would have expected an error`)
    } catch (error) {
        // expecting an error as those apiKeys do not really exist on bybit
    }

})