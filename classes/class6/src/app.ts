import { envs } from "./config/plugins/envs.plugins";
import { MongoConnection, LogModel } from "./data/mongodb";
import { Server } from "./presentation/server";
import 'dotenv/config';

(() => {
    main();
})();

async function main() {
    //console.log(envs)

    MongoConnection.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME
    })

    //create a collection = tables, document = registry
    /*
        const newLog = await LogModel.create({
            message:'Welcome to send data',
            origin:'app.ts'
        })

        await newLog.save();

        console.log(newLog)
    */

    const logs = await LogModel.find();
    console.log(logs)


    //Server.main();    
}