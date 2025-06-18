import { LogEntity, LogSeverityLevel } from "../entities/LogEntity"
import { LogDataSource } from "./log.datasource"

describe('log.datasource',() => {

    const log = {
        level:LogSeverityLevel.low,
        message:'new message from testing',
        origin:'log.datasource.test'
    }

    const logEntity = new LogEntity(log);

    class MockLogDataSource implements LogDataSource{
        async  saveLog(log: LogEntity): Promise<void> {
          
        }
        async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
            return [logEntity];
        }

    }

    it('should test the abstract class', async () => {
        const mockLogDatasource = new MockLogDataSource();
        expect(mockLogDatasource).toBeInstanceOf(MockLogDataSource)
        expect(mockLogDatasource).toHaveProperty('saveLog')
        expect(typeof mockLogDatasource.saveLog).toBe('function')

        await mockLogDatasource.saveLog(logEntity);
        const logs = await mockLogDatasource.getLogs(LogSeverityLevel.low);

        expect(logs).toHaveLength(1);
        expect(logs[0]).toBeInstanceOf(LogEntity)
    })
})