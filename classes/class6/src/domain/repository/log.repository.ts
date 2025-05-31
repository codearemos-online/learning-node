import { LogEntity, LogSeverityLevel } from "../entities/LogEntity";
//who called with dataSource
export abstract class LogRepository {
    abstract saveLog(log:LogEntity):Promise<void>;
    abstract getLogs(severityLevel:LogSeverityLevel):Promise<LogEntity[]>;
}