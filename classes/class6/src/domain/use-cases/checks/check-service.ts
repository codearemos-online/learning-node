import { LogEntity, LogSeverityLevel } from "../../entities/LogEntity";
import { LogRepository } from "../../repository/log.repository";

interface CheckServiceUseCase {
    execute(url: string): Promise<boolean>
}

type successCallback = () => void;
type errorCallback = (error: string) => void;

export class CheckService implements CheckServiceUseCase {

    constructor(
        private readonly logRepository: LogRepository,
        private readonly successCallback: successCallback,
        private readonly errorCallback: errorCallback
    ) { }

    public async execute(url: string): Promise<boolean> {
        try {
            const req = await fetch(url)
            if (!req.ok) throw new Error(`Error on check service ${url}`)
            const options = {
                level: LogSeverityLevel.low,
                message: `Log service ${url} is working`,
                origin: 'check-service.ts'
            };
            const log = new LogEntity(options);
            this.logRepository.saveLog(log);
            this.successCallback();
            return true;
        } catch (error) {
            const errorLog = new LogEntity({
                level: LogSeverityLevel.high,
                message: `${error}`,
                origin: 'check-service.ts'
            })
            this.logRepository.saveLog(errorLog)
            this.errorCallback(`Error en servidor`)
            return false;
        }
    }
}