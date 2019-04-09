import React, { Component } from 'react';
import Pokemon from './components/Pokemon';
import { PokedexDiv } from './App.style';

class Pokedex extends Component {

  render() {

    const pokedex = []

    for (let i = 1; i < 10; i++) {
      pokedex.push(<Pokemon id={i} key={i}/>)
    } 

    return (
      <div>
        <PokedexDiv>
          {pokedex}
        </PokedexDiv>
      </div>
    );
  }
}

export default Pokedex;

