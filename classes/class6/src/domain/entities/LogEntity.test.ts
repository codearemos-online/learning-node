import { LogEntity, LogSeverityLevel } from "./LogEntity"

describe('LogEntity', () => {


    const log = {
        level: LogSeverityLevel.low,
        message: 'new message from testing',
        origin: 'log.entity.test'
    }

    it('should create a LogEntity instace', () => {
        const newLog = new LogEntity(log);

        expect(newLog).toBeInstanceOf(LogEntity);
    })

    it('should create a LogEntity from json', () => {
        const json = `{"message":"Service https://google.com working","level":"low","createdAt":"2023-08-31T16:39:15.618Z","origin":"check-service.ts"}`;
        const log = LogEntity.fromjSON(json);
        expect( log ).toBeInstanceOf( LogEntity );
        expect( log.message ).toBe( "Service https://google.com working" );
        expect( log.level ).toBe( LogSeverityLevel.low );
        expect( log.origin ).toBe( "check-service.ts" );
        expect( log.createdAt ).toBeInstanceOf( Date );
    })
    

    it('should create a LogEntity from object', () => {
        const newLog = LogEntity.fromObject(log);
        expect( newLog ).toBeInstanceOf( LogEntity );
        expect( newLog.message ).toBe( "new message from testing" );
        expect( newLog.level ).toBe( LogSeverityLevel.low );
        expect( newLog.origin ).toBe( "log.entity.test" );
        expect( newLog.createdAt ).toBeInstanceOf( Date );
    })
})