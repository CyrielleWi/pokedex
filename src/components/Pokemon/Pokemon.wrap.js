import React, { Component } from 'react';
import { connect } from 'react-redux'
import Pokemon from './Pokemon.style';
import { getPokemon } from '../../actions';

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
        const pokemonInfo = !pokemon ? {} : pokemon;
        
        return(
            <Pokemon pokemonInfo={pokemonInfo} />
        );
    }
};

const mapStateToProps = (state, { id }) => {
    return ({
    pokedex: state,
    pokemonId: id,
    });
};  

const mapDispatchtoProps = { getPokemon };
    
export default connect(mapStateToProps, mapDispatchtoProps)(getInfo);
  