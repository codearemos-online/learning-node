import { mock } from "node:test"
import { CheckService } from "./check-service"

describe('CheckService UseCase',() => {

    const mockLogRepository = {
        saveLog:jest.fn(),
        getLogs:jest.fn()
    }

    it('should call successCallback when fetch returns true',async () => {
        
        const successCallback = jest.fn();
        const errorCallback = jest.fn();
        
        const checkService = new CheckService(
            mockLogRepository,
            successCallback,
            errorCallback
        )

        const validateOk = await checkService.execute('https://www.google.com')

        expect(validateOk).toBeTruthy()
        expect(successCallback).toHaveBeenCalled()

    }) 
})