import { heroes } from "../src/03-depuring";
describe("Depuring arrays",() => {
    test("should return at least 4 elements",() => {
        const [,superman] = heroes;
        expect(heroes.length).toBe(4);
        expect(superman).toBe("Superman")
    })

})