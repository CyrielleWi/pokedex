export const ADD_POKEMON = 'ADD_POKEMON';
export const GET_POKEMON = 'GET_POKEMON';

export function addPokemon(pokemon) {
    return { type: ADD_POKEMON, pokemon }
};

export function getPokemon(pokemonId) {
    return { type: GET_POKEMON, pokemonId }
};