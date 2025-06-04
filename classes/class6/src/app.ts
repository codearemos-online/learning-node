import { envs } from "./config/plugins/envs.plugins";
import { Server } from "./presentation/server";
import 'dotenv/config';

(() => {
    main();
})();

function main() {
    //console.log(envs)
   Server.main();
}