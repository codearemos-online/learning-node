import { getPokemonById } from "../src/07-promises";

describe("Test from promises", () => {
    it("should_return_a_message_not_found", async () => {
        const id = 0;
        try {
            await getPokemonById(id);
        }catch(error){
            expect(error).toBe("Pokemon not found")
        }
    })

    it("should_return_pokeom_name",async () => {
        const id = 1;
        const pokemonName = await getPokemonById(id);
        expect(pokemonName).toBe("bulbasaur")
    })
})