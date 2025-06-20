import { LogEntity, LogSeverityLevel } from "../../entities/LogEntity";
import { LogRepository } from "../../repository/log.repository";

interface CheckServiceUseCase {
    execute: (url: string) => Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;

export class CheckServiceMultiple implements CheckServiceUseCase {

    constructor(
        private logRepository: LogRepository[],
        private successCallback: SuccessCallback,
        private errorCallback: ErrorCallback
    ) { }

    private callLogs(log: LogEntity) {
        this.logRepository.forEach(logRepository => {
            logRepository.saveLog(log)
        })
    }

    async execute(url: string) {

        try {
            const req = await fetch(url)
            if (!req.ok) throw new Error(`Error on check service ${url}`)
            const options = {
                level: LogSeverityLevel.low,
                message: `Log service ${url} is working`,
                origin: 'check-service.ts'
            };
            const log = new LogEntity(options);
            this.callLogs(log)
            this.successCallback();
            return true;
        } catch (error) {
            const errorLog = new LogEntity({
                level: LogSeverityLevel.high,
                message: `${error}`,
                origin: 'check-service.ts'
            })
            this.callLogs(errorLog)
            this.errorCallback(`Error en servidor`)
            return false;
        }

    }
}