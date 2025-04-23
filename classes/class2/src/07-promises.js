const getPokemonById = (id) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
   .then(res => res.json())
   .then(data => data.name)
   .catch(error => console.log("No se encontro el pokemon"))
}

module.exports = getPokemonById