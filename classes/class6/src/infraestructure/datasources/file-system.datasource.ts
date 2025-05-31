import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/LogEntity";
import fs from 'fs';

export class FileSystemDataSource implements LogDataSource{

    private readonly logsPath = 'logs/';
    private readonly lowLogsPath = 'logs-low.log';
    private readonly mediumLogsPath = 'logs-medium.log';
    private readonly highLogsPath = 'logs-high.log';

    constructor(){
        this.createLogsFile();

        [
            this.lowLogsPath,
            this.mediumLogsPath,
            this.highLogsPath
        ].forEach(path => {
            if(fs.existsSync(path)) return;
            fs.writeFileSync(path,'')
        })
    }

    private createLogsFile(){
        if(!fs.existsSync(this.logsPath)){
            fs.mkdirSync(this.logsPath);
        }
    }

    saveLog(log: LogEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        throw new Error("Method not implemented.");
    }

}