describe("App",() => {
    
    it('shouldBeTrue', () => {
        expect(true).toBe(true)
    })

    it('shouldBe20',() => {
        //Arrange
        const num1 = 5;
        const num2 = 15;

        //Act
        const sum = num1 + num2;

        //Assert
        expect(sum).toBe(20)



    })

})