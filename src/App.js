import React, { Component } from 'react';
import './App.css';
import InputMirror from './InputMirror.js';
import store from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputMirror store={store}/>
      </div>
    );
  }
}

export default App;
