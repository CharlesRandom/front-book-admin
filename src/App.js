import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import { Link } from 'react-router-dom'
import {logout} from './services/auth'

class App extends Component {


  render() {
    const {onLogout} = this
    return (
      <div className="App">

        <Routes/>
      </div>
    );
  }
}

export default App;
