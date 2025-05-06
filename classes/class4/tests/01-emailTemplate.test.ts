import { emailTemplate } from "../src/01-emailTemplate";
describe("Email Template",() => {
    
    test("emailTemplate should contain a greeting",() => {
        const template = emailTemplate("John");
        expect(template).toContain("Hello");
    })

    test("emailTemplate must contain {{name}}",() => {
        const template = emailTemplate("John");
        expect(template).toContain("Hello, John")
    })
})  