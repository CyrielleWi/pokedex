import { call, put, takeEvery } from 'redux-saga/effects';

import { addPokemon } from './actions';
import { fetchPokemon } from './api';
import { convertPoundsToKilograms } from './Pokemon.service';

export function* getPokemon({ pokemonId }) {
    try {
        const pokemon = yield call(fetchPokemon, pokemonId);
        const pokemonInfo = !pokemon ? {} : {
            name: pokemon.name,
            id: pokemonId,
            image: pokemon.sprites.front_default,
            ability: pokemon.abilities[0].ability.name,
            weight: convertPoundsToKilograms(pokemon.weight),
        };
        yield put(addPokemon(pokemonInfo));
    } catch (error) {
        console.log(error);
    }
};

export function* watchGetPokemon() {
    yield takeEvery('GET_POKEMON', getPokemon);
}

