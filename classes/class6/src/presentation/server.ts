import { LogRepository } from "../domain/repository/log.repository";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendLogEmail } from "../domain/use-cases/email/send-log-email";
import { FileSystemDataSource } from "../infraestructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infraestructure/repositories/log.repository.impl";
import { EmailService } from "./email/email.service";
import { CronService } from "./services/cron-service";

const fileSystemLogRepository = new LogRepositoryImpl(new FileSystemDataSource());
export class Server {
    public static main() {
        console.log("Server is running");
       
        const emailService = new EmailService();
        const sendLogEmail = new SendLogEmail(
            fileSystemLogRepository,
            emailService
        ).execute(['dbeltrandev@gmail.com']);

        //CronService.createJob(
        //    '*/2 * * * * *',
        //    async () => {
        //        const data = new CheckService(
        //            fileSystemLogRepository,
        //            () => console.log(`Server is ok`),
        //            (error) => console.log(error) 
        //        );
        //        
                //console.log(await data.execute('https://google.com'));
        //        console.log(await data.execute('http://localhost:3000'));
        //    }
        //);*/
       
    }
}