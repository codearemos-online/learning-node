import { ServerApp } from "./server-app"

describe('server App', () => {
    it('should create server App', () => {
        const server = new ServerApp();

        expect(server).toBeInstanceOf(ServerApp)
        expect(typeof ServerApp.run).toBe('function')
    })
})