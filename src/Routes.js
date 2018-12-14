import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import AuthPage from './components/auth/AuthPage';
// import BooksList from './components/books/AuthorList';
// import ProfilePage from './components/authors/ProfilePage';
import BooksList from './components/books/BooksList'
import BookDetail from './components/books/BookDetail'
import BookCreate from './components/books/BookCreate'
import Profile from './components/auth/Profile'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/signup' component={AuthPage}/>
    <Route path='/login' component={AuthPage}/>
    <Route path='/books/all' component = {BooksList} />
    <Route  exact path='/books/new' component = {BookCreate} />
    <Route path='/books/:id' component = {BookDetail} />

    <Route path='/profile' component={Profile}/>
  </Switch>
)

export default Routes