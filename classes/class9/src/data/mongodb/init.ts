import mongoose from "mongoose";

interface Options {
    dbName: string;
    mongoUrl: string;
}

export class MongoDatabase {
    static async connect(options: Options) {
        const { dbName, mongoUrl } = options;

        try{
            await mongoose.connect(mongoUrl, {
                dbName
            });
            return true;
        }catch(error){
            console.log('Error al conectar a la base de datos', error);
            throw error;
        }
    }
}