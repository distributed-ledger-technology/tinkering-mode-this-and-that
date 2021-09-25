import { Persistence } from "https://deno.land/x/persistence@v1.4.1/persistence.ts";

const pathToDataFile = `${`${Deno.cwd()}/stats`}/abc.json`

await Persistence.saveToLocalFile(pathToDataFile, JSON.stringify(['wtf']))
