import { getFirstAbility } from '../Pokemon.service';
import React from 'react';

const emptyPokemon = {
    abilities: []
};
const pokemon = {
    abilities: [
        {
            ability:{
                name: "chlorophyll"
            }
        }
    ]
};

describe('Tests for getFirstAbility', () => {
    it('Should return null if there is no abilities', () => {
        expect(getFirstAbility(emptyPokemon)).toEqual(null);
    })
    it('Should return the first ability', () => {
        expect(getFirstAbility(pokemon)).toEqual("chlorophyll");
    })
});