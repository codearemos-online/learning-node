const getPokemonById = require("./07-promises")

getPokemonById(1,(name) => {
    console.log(name)
})