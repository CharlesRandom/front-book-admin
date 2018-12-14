import React, { Component } from 'react'
import Home from './Home'
import {getProfile} from '../../services/auth'

class ProfilePage extends Component {

  state={
    user:{}
  }

  componentWillMount(){
    getProfile()
      .then(user=>{
        this.setState({user})
      }).catch(error=>{
        console.log(error)
      })
  }

  render() {
      const {user} = this.state
      const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
      if(!loggedUser) this.props.history.push('/login')
    return (
      <div className="card" style={{margin:5}}>
        <div className="row ">
            <div className="col-md-4">
            <img src="https://thesocietypages.org/socimages/files/2009/05/nopic_192.gif" style={{maxHeight:"200px"}} alt="profile pic"/>
            </div>
            <div className="col-md-8">
              <div className="card-block">
                <h4 className="card-title">{user.name}</h4>
                <p className="card-text">{user.email}</p>
              </div>
              <Home/>
            </div>
        </div>
      </div>
    )
  }
}

export default ProfilePage