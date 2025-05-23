import { yarg } from "../src/pugins/yargs.plugin"
import { ServerApp } from "../src/presentation/server-app"

const main = async () => {
    const {b:base,l:limit,n:name,p:path} = yarg;
    ServerApp.run({
        name,
        path,
        base,
        limit
    })
}

(async () => {
    await main();
})()

