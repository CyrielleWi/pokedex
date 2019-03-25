import { connect } from 'react-redux'
import Pokemon from '../components/Pokemon.js';

const getInfo = (pokedex, pokemonName) => {
    const pokemon = pokedex[pokemonName]

    if (!pokemon) {
        return {}
    } 

    return {
        name: pokemonName,
        image: pokemon.sprites.front_default,
        ability: pokemon.abilities[0].ability.name,
        weight: pokemon.weight,
    }
};

const mapStateToProps = (state) => ({
    pokemonInfo: getInfo(state, 'bulbasaur')
});
    
const mapDispatchtoProps = { };
    
export default connect(mapStateToProps, mapDispatchtoProps)(Pokemon);
  