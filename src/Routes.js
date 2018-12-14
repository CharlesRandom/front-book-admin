import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import AuthPage from './components/auth/AuthPage';
// import BooksList from './components/books/AuthorList';
import ProfilePage from './components/home/ProfilePage';
import BooksList from './components/books/BooksList'
import BookDetail from './components/books/BookDetail'
import BookCreate from './components/books/BookCreate'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/signup' component={AuthPage}/>
    <Route path='/login' component={AuthPage}/>
    <Route path='/books' component = {BooksList} />
    <Route path='/books/:id' component = {BookDetail} />
    <Route path='/books/new' component = {BookCreate} />
    <Route path='/profile' component={ProfilePage}/>
  </Switch>
)

export default Routes