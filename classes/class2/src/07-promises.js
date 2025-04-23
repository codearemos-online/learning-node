const {http} = require("../plugins")
const getPokemonById  = async (id) => {
   
    const res = await http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return res.name;
}

module.exports = getPokemonById