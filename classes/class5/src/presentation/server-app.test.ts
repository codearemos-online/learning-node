import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";
import { ServerApp } from "./server-app"

describe('server App', () => {

    let server: ServerApp;
    const options = {
        name: 'ejemplo',
        path: 'tablas',
        base: 10,
        limit: 10
    }
    beforeEach(() => {
        server = new ServerApp();
    })

    it('should create server App', () => {
        expect(server).toBeInstanceOf(ServerApp)
        expect(typeof ServerApp.run).toBe('function')
    })

    test('should return response with values', () => {
        const logSpy = jest.spyOn(console, 'log');

        ServerApp.run(options);
        expect(logSpy).toHaveBeenCalledTimes(1)
        expect(logSpy).toHaveBeenCalledWith('File saved')
    })

    it('should run with custom values mock', () => {
        const createMock = jest.fn().mockReturnValue('1 x 1 = 1');
        const saveFileMock = jest.fn();
        const consoleMock = jest.fn(); 

        CreateTable.prototype.execute = createMock;
        SaveFile.prototype.execute = saveFileMock;
        console.log = consoleMock;

        ServerApp.run(options);

        expect(consoleMock).toHaveBeenCalledTimes(1)
        expect(createMock).toHaveBeenCalledWith({base:options.base,limit:options.limit})
        expect(saveFileMock).toHaveBeenCalledWith({
            fileContent : '1 x 1 = 1',
            fileDestination:options.path,
            fileName : options.name
        })


    })
})
