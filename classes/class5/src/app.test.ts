import { ServerApp } from "./presentation/server-app";

describe('Test App.ts',() => {
    test('should call Server.run with values', async () => {
        const serverMock = jest.fn();
        ServerApp.run = serverMock;
        process.argv = ['node','app.ts','-b','5','-l','10','-n','prueba','-p','path']

        await import('./app')
     
        expect(serverMock).toHaveBeenCalledWith({
            base:5,
            limit:10,
            name:'prueba',
            path:'path'
        })

        console.log(process.argv)

        
    })
})