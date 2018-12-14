import React,{Component} from 'react'
import {Link} from "react-router-dom";
import {logout} from "../../services/auth";
class Navbar extends Component{

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
            <nav>
                <Link style={{margin: 5}} class="btn btn-primary" to='/login'>Login</Link>
                <Link style={{margin: 5}} class="btn btn-primary" to='/signup'>Signup</Link>
                <Link style={{margin: 5}} class="btn btn-primary" to='/profile'>Profile</Link>
                <button style={{margin: 5}} className="btn btn-primary" onClick={onLogout}>Logout</button>
            </nav>
        )
    }
}

export default Navbar