import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./services/cron-service";

export class Server {
    public static main() {
        console.log("Server is running");
        
        CronService.createJob(
            '*/2 * * * * *',
            async () => {
                const data = new CheckService();
                
                //console.log(await data.execute('https://google.com'));
                console.log(await data.execute('http://localhost:3000'));
            }
        );
    }
}