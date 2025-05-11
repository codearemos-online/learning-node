const { http } = require("./plugins")
const getPokemonById = async (id: number) => {

    try {
        const res = await http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        return res.name;
    } catch (error) {
        return "Pokemon not found"
    }
}

export { getPokemonById }