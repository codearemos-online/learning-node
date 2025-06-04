import { create } from "domain";

export enum LogSeverityLevel {
    low    = 'low',
    medium = 'medium',
    high   = 'high',
}

export type LogOptions = {
    level:LogSeverityLevel,
    message:string,
    origin:string,
    createdAt?:Date
}

export class LogEntity{
    public level:LogSeverityLevel;
    public message:string;
    public createdAt:Date
    public origin:string;

    constructor(
        options:LogOptions
    ){
        const { level,message,origin,createdAt = new Date() } = options;
        this.level = level;
        this.message = message;
        this.origin = origin;
        this.createdAt = createdAt;
    }

    static fromjSON = (json:string):LogEntity => {
      const {level,message,createdAt,origin} = JSON.parse(json);
      const log = new LogEntity({
        level,
        message,
        origin,
      });
      log.createdAt = new Date(createdAt);

      return log;
    }
}