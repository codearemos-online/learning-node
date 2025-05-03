import { getPokemonById } from "./07-promises"

getPokemonById(5).then((pokemon) => {
    console.log(pokemon)
})
