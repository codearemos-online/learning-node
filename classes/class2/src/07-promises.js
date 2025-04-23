const getPokemonById = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => {
        res.json().then(data => console.log(data.name))
    })
}

module.exports = getPokemonById