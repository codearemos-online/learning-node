import { EmailService } from "../../../presentation/email/email.service";
import { LogEntity, LogSeverityLevel } from "../../entities/LogEntity";
import { LogRepository } from "../../repository/log.repository";

export interface SendLogEmailUseCase{
    execute:(to:string | string[]) => Promise<boolean>;
}

export class SendLogEmail implements SendLogEmailUseCase{

    constructor(
        private readonly logRepository:LogRepository,
        private readonly emailService:EmailService
    ){}

    async execute(to: string | string[]){
        try{
            const sent = await this.emailService.sendEmailBySystemLogs(to)
            if(!sent){
                throw new Error(`Email was not sent`)
            }
              const logEntity = new LogEntity({
                message:`Log sent succesfully`,
                origin:'SendLogEmail',
                level:LogSeverityLevel.low
            });
            this.logRepository.saveLog(logEntity);
            return true;
        }catch(error){
            const logEntity = new LogEntity({
                message:`${error}`,
                origin:'SendLogEmail',
                level:LogSeverityLevel.high
            });
            this.logRepository.saveLog(logEntity);
            return false;
        }
    };

}