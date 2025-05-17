import { yarg } from "../src/pugins/yargs.plugin"
import { ServerApp } from "../src/presentation/server-app"

const main = async () => {
    console.log(yarg)
    const {b:base,l:limit} = yarg;
    console.log(ServerApp.run({
        base,
        limit
    }))
}

(async () => {
    await main();
})()

