import { getAge } from "../src/plugins"

describe("age test", () => {
    it("should_return_correct_age", () => {
        const age = getAge("1996-03-27");
        expect(age).toBe(29)
    })

    it("should_return_a_error", () => {
        try {
            const age = getAge();
        } catch (error) {
            expect(error).toBe("El birthdate es obligatorio")
        }
    })
})