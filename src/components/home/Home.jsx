import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h1>Holi</h1>
    <Link to='/books/all'><button>Lista de Libros</button></Link>
    <Link to='/books/new'><button>Agregar Libro</button></Link>
    <Link to='/books/:id'><button>Ver Detalle</button></Link>
  </div>
)

export default Home