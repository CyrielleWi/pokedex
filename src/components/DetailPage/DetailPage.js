import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../../actions';

class DetailPage extends Component {

    componentDidMount = () => {
        const { pokemonId, pokedex, getPokemon } = this.props;

        if (!pokedex[pokemonId]) {
            getPokemon(pokemonId);
        }
    }

    render() {

        const { pokedex, pokemonId, classes } = this.props;

        const pokemon = pokedex[pokemonId];
        const pokemonInfo = !pokemon ? {} : pokemon;

        return(
                <div className={classes.div}>
                <p className={classes.name}>{pokemonInfo.name}</p>
                <img src={pokemonInfo.image} alt={pokemonInfo.name} /> 
                <div>Attack : {pokemonInfo.ability}</div>
                Weight : {pokemonInfo.weight} kg
                </div>
        );
    }
}

const mapStateToProps = (state, { match }) => {
    return ({
    pokedex: state,
    pokemonId: match.params.id,
    });
};  

const mapDispatchtoProps = { getPokemon };

export default connect(mapStateToProps, mapDispatchtoProps)(DetailPage);
  