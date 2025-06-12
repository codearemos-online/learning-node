import { PrismaClient, SeverityLevel } from "../../../generated/prisma";
import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/LogEntity";

const SeverityEnum = {
    low:SeverityLevel.LOW,
    medium:SeverityLevel.MEDIUM,
    high:SeverityLevel.HIGH
}

const prisma = new PrismaClient();

export class PostgresLogDataSource implements LogDataSource{
    async saveLog(log: LogEntity): Promise<void> {
        const {level,message,origin} = log;
        await prisma.logModel.create({
            data:{
                level:SeverityEnum[level],
                message:message,
                origin:origin
            }
        });
    }
    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        const logs = await prisma.logModel.findMany()
        return logs.map((log) => LogEntity.fromObject(log))
    }

}