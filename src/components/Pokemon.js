import React from 'react';
import PropTypes from 'prop-types';
import { PokedexDiv, Name } from './Pokemon.style';

const Pokemon = ({ pokemonInfo }) => {

    if (Object.keys(pokemonInfo).length === 0) {
        return <PokedexDiv />
    }

    let name = pokemonInfo.name[0].toUpperCase() + pokemonInfo.name.slice(1);

    return (<PokedexDiv>
        <Name>{name}</Name> 
        <img src={pokemonInfo.image} alt={pokemonInfo.name} /> <br />
        Attack : {pokemonInfo.ability}<br />
        Weight : {pokemonInfo.weight} kg
    </PokedexDiv>);
}

export default Pokemon;

Pokemon.propTypes = {
    pokemonInfo: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        ability: PropTypes.string,
        weight: PropTypes.number,
      }).isRequired

  }