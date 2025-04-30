import { http } from './plugins';

const getPokemonById = async(id:number) => {
    const pokemon = await http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return pokemon
}

const main = async () => {
    const pokemon = await getPokemonById(1);
    console.log(pokemon.name)
}

main()