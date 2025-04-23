const getPokemonById = require("./07-promises")

console.log(getPokemonById(1,(name) => {
    console.log(name)
}))