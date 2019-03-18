import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import './App.css';
import reducer from './reducers';
import { watchGetPokemon } from './sagas';
import { GET_POKEMON } from './actions';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchGetPokemon);

const action = type => store.dispatch({type});

class App extends Component {

  componentDidMount() {
    action(GET_POKEMON);
  };

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
