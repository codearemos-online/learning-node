//import { yarg } from "./yargs.plugin"

const runCommands = async (args: string[]) => {
    process.argv = [...process.argv, ...args]
    const { yarg } = await import('./yargs.plugin')
    return yarg;
}

describe('Test yargs plugin', () => {

    const originalArgv = process.argv
    
    beforeEach(() => {
        process.argv = originalArgv;
        jest.resetModules();
    })
    
    it('should return default values', async () => {
        const argv = await runCommands(['-b', '5']);
        expect(argv).toEqual(expect.objectContaining({
            b: 5,
            l: 15,
            n: 'table',
            p: 'outputs/',
        }))
    })

    it('should return config with values', async () => {
          const argv = await runCommands(['-b', '5','-l', '10','-n','table-changed','-p', 'data/']);
          expect(argv).toEqual(expect.objectContaining({
            b: 5,
            l: 10,
            n: 'table-changed',
            p: 'data/',
        }))
    })
})
