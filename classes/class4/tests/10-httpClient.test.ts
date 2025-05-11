import { http } from "../src/plugins"

describe("Test HttpClient", () => {
    it("should_return_a_pokemon_name", async () => {
        const id: number = 1;
        const url: string = `https://pokeapi.co/api/v2/pokemon/${id}`;

        const pokemonName = await http.get(url);
        expect(pokemonName.name).toBe('bulbasaur')
    })

    it("should_return_a_error_message", async () => {
        const id: number = 0;
        const url: string = `https://pokeapi.co/api/v2/pokemon/${id}`;
        try {
            const pokemonName = await http.get(url);
        } catch (error) {
            expect(error).toBe('Pokemon not found')
        }

    })
})