import { LogRepository } from "../domain/repository/log.repository";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { SendLogEmail } from "../domain/use-cases/email/send-log-email";
import { FileSystemDataSource } from "../infraestructure/datasources/file-system.datasource";
import { MongoLogDataSource } from "../infraestructure/datasources/mongo-log.datasource";
import { PostgresLogDataSource } from "../infraestructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infraestructure/repositories/log.repository.impl";
import { EmailService } from "./email/email.service";
import { CronService } from "./services/cron-service";

const logRepository = new LogRepositoryImpl(new MongoLogDataSource());
const fileSystemLogRepository = new LogRepositoryImpl(new FileSystemDataSource());
const mongoLogRepository = new LogRepositoryImpl(new MongoLogDataSource());
const postgresLogRepository = new LogRepositoryImpl(new PostgresLogDataSource());
export class Server {
    public static main() {
        console.log("Server is running");
       
        //const emailService = new EmailService();
        /*const sendLogEmail = new SendLogEmail(
            fileSystemLogRepository,
            emailService
        ).execute(['dbeltrandev@gmail.com']);
         */   
        CronService.createJob(
            '*/2 * * * * *',
            async () => {
                const data = new CheckServiceMultiple(
                    [fileSystemLogRepository,postgresLogRepository,mongoLogRepository],
                    () => console.log(`Server is ok`),
                    (error) => console.log(error) 
                );
                
      //console.log(await data.execute('https://google.com'));
                console.log(await data.execute('https://google.com'));
            }
        );
       
    }
}