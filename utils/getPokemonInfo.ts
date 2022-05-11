import { Pokemon } from "../interfaces";
import { pokeApi } from "../pages/api";

export const getPokemonInfo = async (nameOrId:string) => {
    
    try {
        const {data} =await pokeApi.get<Pokemon>(`pokemon/${nameOrId}`);
        return {
            id:data.id,
            name: data.name,
            sprites:data.sprites
        }   
    } catch (error) {
        return null
    }
}
