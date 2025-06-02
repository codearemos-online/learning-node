import { Server } from "./presentation/server";
import 'dotenv/config';

(() => {
    main();
})();

function main() {
    console.log(process.env.PORT)
   // Server.main();
}