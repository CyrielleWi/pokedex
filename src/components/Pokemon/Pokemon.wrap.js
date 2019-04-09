import React, { Component } from 'react';
import { connect } from 'react-redux'
import Pokemon from './Pokemon.style';
import { getPokemon } from '../../actions';
import { convertPoundsToKilograms } from '../../Pokemon.service';

class getInfo extends Component {

    componentDidMount = () => {
        const { pokemonId, pokedex, getPokemon } = this.props;

        if (!pokedex[pokemonId]) {
            getPokemon(pokemonId);
        }
    }

    render() {
        const { pokemonId, pokedex } = this.props;

        const pokemon = pokedex[pokemonId];
        let pokemonInfo = {};

        if (pokemon) {
            pokemonInfo = {
                name: pokemon.name,
                image: pokemon.sprites.front_default,
                ability: pokemon.abilities[0].ability.name,
                weight: convertPoundsToKilograms(pokemon.weight),
            };
        }

        return(
            <Pokemon pokemonInfo={pokemonInfo} />
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps;

    return ({
    pokedex: state,
    pokemonId: id,
    });
};  

const mapDispatchtoProps = { getPokemon };
    
export default connect(mapStateToProps, mapDispatchtoProps)(getInfo);
  