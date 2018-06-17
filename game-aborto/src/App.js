import React, { Component } from 'react';
import './App.css';

//TODO: Fetch this data from an express server, save it as state.
import diputados from './data/diputados.js';
import frases from './data/frases.js';

import Layout from './components/layout.js';

class App extends Component {
  render() {
    return (
      <Layout
        frases = {frases}
        diputados = {diputados}
      ></Layout>
    );
  }
}

export default App;
