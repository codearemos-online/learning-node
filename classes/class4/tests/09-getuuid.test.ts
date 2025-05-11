import { uuidv4 } from '../src/plugins'

describe("Test uuid", () => {
    it("should_return_uuid", () => {
        const uuid = uuidv4();
        expect(typeof uuid).toBe('string')
        expect(uuid.length).toBe(36)
    })

})