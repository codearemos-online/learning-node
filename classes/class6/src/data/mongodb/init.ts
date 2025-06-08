import mongoose from 'mongoose';

export interface ConnectionOptions{
    mongoUrl:string,
    dbName:string
}

export class MongoConnection { 
    static async connect(options:ConnectionOptions){
        const {mongoUrl,dbName} = options;
        try{
            await mongoose.connect(mongoUrl,{
            dbName
        })
        console.log('Connection success')
        }catch(error){
            console.log(error);
            throw 'No se ha podido conectar a la BD';
        }
    }
}