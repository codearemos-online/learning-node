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
            const log = new LogEntity(LogSeverityLevel.low, `Log service ${url} is working`);
            this.logRepository.saveLog(log);
            this.successCallback();
            return true;
        } catch (error) {
            const errorLog = new LogEntity(LogSeverityLevel.high, `${error}`)
            this.logRepository.saveLog(errorLog)
            this.errorCallback(`Error en servidor`)
            return false;
        }
    }
}