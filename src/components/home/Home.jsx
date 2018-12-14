import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h1>Holi</h1>
    <Link to='/all'><button>Lista de Libros</button></Link>
    <Link to='/new'><button>Agregar Libro</button></Link>
    <Link to='/delete'><button>Borrar Libro</button></Link>
  </div>
)

export default Home