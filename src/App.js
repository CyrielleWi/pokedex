import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addPokemon, getPokemon } from './actions';
import Pokemon from './containers/getInfo';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getPokemon();
  };

  render() {

    return (
      <div className="Pokedex">
        <Pokemon />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { state };
};
  
const mapDispatchtoProps = { getPokemon, addPokemon };
  
export default connect(mapStateToProps, mapDispatchtoProps)(App);

