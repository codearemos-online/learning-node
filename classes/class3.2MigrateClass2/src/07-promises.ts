const {http} = require("./plugins")
const getPokemonById  = async (id:number) => {
   
    const res = await http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return res.name;
}

export {getPokemonById}