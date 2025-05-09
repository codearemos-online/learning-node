import { getUserById } from "../src/05-arrow"

describe("GetUserById",() => {
    it("should return john name", () => {
        const user = getUserById(1,(user,error) => {
            expect(user.name).toBe("John")
        })
    })
})
