var express = require("express");
var app = express();
import { CodeRegistryService } from "./service"

const service = new CodeRegistryService()

/* serves main page */
app.get("/", async function (req, res) {
    const oscBalance = await service.getOSCBalance(`0x7A915e362353d72570dcf90aa5BAA1C5B341c7AA`)
    res.send({ oscBalance })
});

var port = 3002;
app.listen(port, function () {
    console.log("Listening on " + `http://localhost:${port}`);
});