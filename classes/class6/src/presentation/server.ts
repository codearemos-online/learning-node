import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDataSource } from "../infraestructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infraestructure/repositories/log.repository.impl";
import { EmailService } from "./email/email.service";
import { CronService } from "./services/cron-service";

const fileSystemLogRepository = new LogRepositoryImpl(new FileSystemDataSource());
export class Server {
    public static main() {
        console.log("Server is running");
       
        const emailService = new EmailService();

        emailService.sendEmailBySystemLogs(['dbeltrandev@gmail.com'])

      
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