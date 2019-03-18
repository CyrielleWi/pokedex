export const ADD_POKEMON = 'ADD_POKEMON';
export const GET_POKEMON = 'GET_POKEMON';

export function addPokemon(pokemon) {
    return { type: ADD_POKEMON, pokemon}
};

export function getPokemon() {
    return { type: GET_POKEMON }
};