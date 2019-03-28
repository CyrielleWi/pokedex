import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = ({ pokemonInfo }) => (
    <div>
        <h1>{pokemonInfo.name}</h1>
        <img src={pokemonInfo.image} alt={pokemonInfo.name} />
        <p>First ability : {pokemonInfo.ability}</p>
        <p>Weight : {pokemonInfo.weight} kg</p>
    </div>
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