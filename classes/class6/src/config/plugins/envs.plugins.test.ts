import { envs } from "./envs.plugins"

describe('envs.plugins', () => {

    it('should return env options', () => {
        expect(envs).toEqual({
            PORT: 3000,
            MAIL_SERVICE: 'gmail',
            MAILER_EMAIL: 'cuentapremiumdiego1996@gmail.com',
            MAILER_SECRET_KEY: 'aolw wmtj ocxd zeso',
            MONGO_URL: 'mongodb://diego:12345678@localhost:27017',
            MONGO_DB_NAME: 'noc_test',
            MONGO_USER: 'diego',
            MONGO_PASS: '12345678'
        })
    })

})