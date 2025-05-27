import { CronService } from "./services/cron-service";

export class Server {
    public static main() {
        console.log("Server is running");
        
        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const date = new Date();
                console.log('Every 5 seconds ', date)
            }
        );
    }
}