import { call, put, takeEvery } from 'redux-saga/effects';

import { addPokemon } from './actions';
import { fetchPokemon } from './api';

export function* getPokemon() {
    try {
        const pokemon = yield call(fetchPokemon);
        yield put(addPokemon(pokemon));
    } catch (error) {
        console.log(error);
    }
};

export function* watchGetPokemon() {
    yield takeEvery('GET_POKEMON', getPokemon);
}

