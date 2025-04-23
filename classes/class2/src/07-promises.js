const getPokemonById = (id,callback) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
   .then(res => res.json().then(data => {
    callback(data.name)
   }))
}

module.exports = getPokemonById