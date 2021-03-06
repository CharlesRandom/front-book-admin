import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import AuthPage from './components/auth/AuthPage';
// import BooksList from './components/books/AuthorList';
import ProfilePage from './components/home/ProfilePage';
import BooksList from './components/books/BooksList'
import BookDetail from './components/books/BookDetail'
import BookCreate from './components/books/BookCreate'
import Profile from './components/auth/Profile'
import Landing from "./components/home/Landing";

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Landing}/>
    <Route path='/signup' component={AuthPage}/>
    <Route path='/login' component={AuthPage}/>
    <Route path='/books/all' component = {BooksList} />
    <Route  exact path='/books/new' component = {BookCreate} />
    <Route path='/books/:id' component = {BookDetail} />
    <Route path='/profile' component={ProfilePage}/>

  </Switch>
)

export default Routes