import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import AuthPage from './components/auth/AuthPage';
// import BooksList from './components/books/AuthorList';
// import ProfilePage from './components/authors/ProfilePage';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/signup' component={AuthPage}/>
    <Route path='/login' component={AuthPage}/>
    {/* <Route path='/profile' component={ProfilePage}/> */}
  </Switch>
)

export default Routes