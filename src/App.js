import React, { Component } from 'react';
import './App.css';
import HeroGuesser from './containers/HeroGuesser/HeroGuesser';

class App extends Component {
  render() {
    return (
      <div className="App">
      <HeroGuesser/>
      </div>
    );
  }
}

export default App;
