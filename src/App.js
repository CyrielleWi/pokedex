import React, { Component } from 'react';
import Pokemon from './components/Pokemon';
import { Pokedex } from './App.style';

class App extends Component {

  render() {

    const pokedex = []

    for (let i = 1; i < 10; i++) {
      pokedex.push(<Pokemon id={i} key={i}/>)
    } 

    return (
      <Pokedex>
      {pokedex}
      </Pokedex>
    );
  }
}

export default App;

