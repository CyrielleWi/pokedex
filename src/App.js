import React, { Component } from 'react';
import Pokemon from './containers/getInfo';

class App extends Component {

  render() {

    const pokedex = []

    for (let i = 1; i < 10; i++) {
      pokedex.push(<Pokemon id={i} key={i}/>)
    } 

    return (
      <div className="Pokedex">
      {pokedex}
      </div>
    );
  }
}

export default App;

