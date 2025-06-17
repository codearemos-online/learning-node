import mongoose from "mongoose"
import { LogModel, MongoConnection } from "../"

describe('logModel', () => {
    beforeAll(async () => {
        await MongoConnection.connect({
            mongoUrl: process.env.MONGO_URL!,
            dbName: process.env.MONGO_DB_NAME!
        })
    })

    afterAll(async () => {
        await mongoose.connection.close()
    })

    it('should return log Model', async () => {
        const data = {
            level: 'low',
            message: 'new message',
        }
        const log = await LogModel.create(data)
        expect(log).toEqual(expect.objectContaining({
            ...data,
            id: expect.any(String)
        }))
        expect(log.message).toEqual(data.message)

        expect(log).toMatchObject({
            ...data
        })

        await LogModel.findByIdAndDelete(log.id);

    })

    it('should return a schema object', () => {
        const schema = LogModel.schema.obj;
        expect(schema).toMatchObject({
            level: {
                type: expect.any(Function)
            },
            message: expect.any(Object),
            origin: expect.any(Function),
            createdAt: expect.any(Object)
        })
    })
})