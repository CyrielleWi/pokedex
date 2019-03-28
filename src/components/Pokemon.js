import React from 'react';
import PropTypes from 'prop-types';
import { PokedexDiv } from './Pokemon.style';

const Pokemon = ({ pokemonInfo }) => (
    <PokedexDiv>
        {pokemonInfo.name} <br />
        <img src={pokemonInfo.image} alt={pokemonInfo.name} /> <br />
        First ability : {pokemonInfo.ability}<br />
        Weight : {pokemonInfo.weight} kg
    </PokedexDiv>
)

export default Pokemon;

Pokemon.propTypes = {
    pokemonInfo: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        ability: PropTypes.string,
        weight: PropTypes.number,
      }).isRequired

  }