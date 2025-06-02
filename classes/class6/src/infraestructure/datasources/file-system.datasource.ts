import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/LogEntity";
import fs from 'fs';

export class FileSystemDataSource implements LogDataSource {

    private readonly logsPath = 'logs/';
    private readonly allLogsPath = 'logs/logs-all.log'
    private readonly lowLogsPath = 'logs/logs-low.log';
    private readonly mediumLogsPath = 'logs/logs-medium.log';
    private readonly highLogsPath = 'logs/logs-high.log';

    constructor() {
        this.createLogsFile();

        [
            this.allLogsPath,
            this.lowLogsPath,
            this.mediumLogsPath,
            this.highLogsPath
        ].forEach(path => {
            if (fs.existsSync(path)) return;
            fs.writeFileSync(path, '')
        })
    }

    private createLogsFile() {
        if (!fs.existsSync(this.logsPath)) {
            fs.mkdirSync(this.logsPath);
        }
    }

    async saveLog(log: LogEntity): Promise<void> {
        const newLogAsJson = `${JSON.stringify(log)}\n`;
        fs.appendFileSync(this.allLogsPath, newLogAsJson)

        switch (log.level) {
            case (LogSeverityLevel.low):
                fs.appendFileSync(this.lowLogsPath, newLogAsJson)
                break;
            case (LogSeverityLevel.medium):
                fs.appendFileSync(this.mediumLogsPath, newLogAsJson)
                break;
            case (LogSeverityLevel.high):
                fs.appendFileSync(this.highLogsPath, newLogAsJson)
                break;
        }
    }

    private getLogsFromFile = (path: string):LogEntity[] => {
        const content = fs.readFileSync(path, 'utf-8');
        const logs:LogEntity[] = content.split('\n').map(log => LogEntity.fromjSON(log))
        return logs;
    }

    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        switch (severityLevel) {
            case LogSeverityLevel.low:
                return this.getLogsFromFile(this.lowLogsPath);
            case LogSeverityLevel.medium:
                return this.getLogsFromFile(this.mediumLogsPath);
            case LogSeverityLevel.high:
                return this.getLogsFromFile(this.highLogsPath);
        }
    }

}