import React, { Component } from 'react';
import {Router} from '@reach/router';
import './normalize.css';
import NotFound from './components/NotFound.jsx';

class App extends Component {
  
  render() {
    return (
      <div className="App">
          <header><h1>Cabinet of Curious Crafts</h1></header>

        <Router className="main">
          <NotFound default/>
        </Router>
  
          <footer>@HorrorOfPartyBeach</footer>
      </div>
    );
  }


  }


export default App;