import { getAge } from "../src/plugins"

describe("age test", () => {
    it("should_return_correct_age", () => {
        const age = getAge("1996-03-27");
        expect(age).toBe(29)
    })

   it("should return a value 0",() => {
    const spy = jest.spyOn(Date.prototype,"getFullYear").mockReturnValue(1960);
    const date = "1960-01-01";
    const age = getAge(date);
    expect(age).toBe(0)
   })
})