import { LogEntity, LogSeverityLevel } from "../entities/LogEntity";
//Define all the rules
export abstract class LogDataSource {
    abstract saveLog(log:LogEntity):Promise<void>;
    abstract getLogs(severityLevel:LogSeverityLevel):Promise<LogEntity[]>;
}