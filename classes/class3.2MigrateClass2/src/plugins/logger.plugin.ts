import winston,{format} from 'winston';
const { combine, timestamp, json } =    format;



const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp(), json()),
  //defaultMeta : {  service : 'user-service'  } , 
  transports: [
    // 
    // - Escribe todos los registros con un nivel de importancia de `error` o superior en `error.log` 
    // (es decir, error, fatal, pero no otros niveles) 
    // 
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    // 
    // - Escribe todos los registros con un nivel de importancia de `info` o superior en `combined.log` 
    // (es decir, fatal, error, warn e info, pero no trace) 
    // 
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});



export function buildLogger(service:string) {       
  return {
    log: (message:string) => {
      logger.log('info', { message, service })
    },
    error(message:string){
      logger.error({message,service})
    }
  }
}