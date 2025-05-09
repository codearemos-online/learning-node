import { getAge, uuidv4 } from "../src/plugins";
import { makeGetUser } from "../src/06-factory-function"

describe("Testing to factory functions", () => {
    it("should return a user age correctly", () => {
        const data = {
            name: "Diego",
            lastname: "Beltran",
            birthdate:"1996-03-27"
        };
        const makeUser = makeGetUser(getAge, uuidv4);
        const user = makeUser(data)
        expect(user.age).toBe(29)
    })
})

