import mongoose from "mongoose"
import { MongoConnection } from "./init"

describe('init',() => {

    afterAll(() => {
        mongoose.connection.close()
    })

    it('should validate connection with mongodb', async () => {

        const options = {
            mongoUrl:process.env.MONGO_URL!,
            dbName:process.env.MONGO_DB_NAME!
        }
        const connection = await MongoConnection.connect(options)

        expect(connection).toBeTruthy()
    })

    it('should throw a specific error when connection fails', async () => {
        const invalidOptions = {
          mongoUrl: 'mongodb://localhost:12345',
          dbName: 'failConnection',
        };
      
        try {
          await MongoConnection.connect(invalidOptions);
        } catch (error) {
          expect(error).toBe('No se ha podido conectar a la BD');
        }
      });
      
})