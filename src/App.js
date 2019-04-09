import React, { Component } from 'react';
import Pokedex from './Pokedex';
import DetailPage from './components/DetailPage';
import { Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Pokedex}/>
          <Route path="/detail_page/:id" component={DetailPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;

