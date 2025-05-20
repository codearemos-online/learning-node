import { SaveFile } from "./save-file.use-case";
import fs, { read } from 'node:fs';

describe('saveDefaultValues', () => {
    it('should save file with default values', () => {
        const saveFile = new SaveFile();
        const options = {
            fileContent: 'any data'
        }
        const result = saveFile.execute(options)
        const fileExists = fs.existsSync('outputs/table.txt')
        expect(result).toBeTruthy()
        expect(fileExists).toBe(true)
        const readFile = fs.readFileSync('outputs/table.txt', { encoding: 'utf-8' })
        expect(readFile).toBe('any data')
    })

    it('should return false if folder could not be created',() => {
        const saveFile = new SaveFile()
        const mkdirSpy = jest.spyOn(fs,'mkdirSync').mockImplementation(
            () => {  throw new Error('error')}
        )
        const options = {
            fileContent: 'any data'
        }
        const result = saveFile.execute(options)
        expect(result).toBeFalsy()
    })

     it('should return false if file could not be created',() => {
        const saveFile = new SaveFile()
        const mkdirSpy = jest.spyOn(fs,'writeFileSync').mockImplementation(
            () => {  throw new Error('error')}
        )
        const options = {
            fileContent: 'any data'
        }
        const result = saveFile.execute(options)
        expect(result).toBeFalsy()

        mkdirSpy.mockRestore()
    })
}) 