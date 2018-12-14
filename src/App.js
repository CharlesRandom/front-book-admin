import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import { Link } from 'react-router-dom'
import {logout} from './services/auth'

class App extends Component {

  state={
    user:{}
  }

  onLogout = e => {
    console.log('login out')
    logout()
      .then(user=>{
        console.log('logged out succesfully')
        this.setState({user})
        this.props.history.push('/')
      }).catch(error=>{
        console.log(error)
      })
  }

  render() {
    const {onLogout} = this
    return (
      <div className="App">
        <nav>
          <Link style={{margin:5}} class="btn btn-primary" to='/login'>Login</Link>
          <Link style={{margin:5}} class="btn btn-primary" to='/signup'>Signup</Link>
          <Link style={{margin:5}} class="btn btn-primary" to='/profile'>Profile</Link>
          <button style={{margin:5}} class="btn btn-primary" onClick={onLogout}>Logout</button>
        </nav>
        <Routes/>
      </div>
    );
  }
}

export default App;
