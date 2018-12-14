import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h1>Bienvenido</h1>
    <Link style={{margin:5}} className="btn btn-primary" to='/books/all'>Lista de Libros</Link>
    <Link style={{margin:5}} className="btn btn-primary" to='/books/new'>Agregar Libro</Link>
    <Link style={{margin:5}} className="btn btn-primary" to='/books/:id'>Ver Detalle</Link>
  </div>
)

export default Home