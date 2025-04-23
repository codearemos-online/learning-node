const getPokemonById  = async (id) => {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    let data = await res.json()
    return data.name;
}

module.exports = getPokemonById