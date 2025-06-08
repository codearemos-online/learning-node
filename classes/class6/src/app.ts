import { envs } from "./config/plugins/envs.plugins";
import { MongoConnection } from "./data/mongodb";
import { Server } from "./presentation/server";
import 'dotenv/config';

(() => {
    main();
})();

async function main() {
    //console.log(envs)
   
   MongoConnection.connect({
    mongoUrl:envs.MONGO_URL,
    dbName:envs.MONGO_DB_NAME
   })
    //Server.main();    
}