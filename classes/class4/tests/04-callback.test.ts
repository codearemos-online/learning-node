import { getUserById } from "../src/04-callback";

describe("Testing from callbacks",() => {
    it("validate_user_not_found",() => {
        const id = 10;
        getUserById(10,(err,user) => {
            expect(err).toBe("User not found 10");
            expect(user).toBeUndefined();
        })
    })
});