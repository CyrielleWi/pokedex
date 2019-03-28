import React, { Component } from 'react';
import { connect } from 'react-redux'
import Pokemon from './containers/getInfo';

import './App.css';

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

const mapStateToProps = (state) => {
  return { state };
};
  
const mapDispatchtoProps = { };
  
export default connect(mapStateToProps, mapDispatchtoProps)(App);

