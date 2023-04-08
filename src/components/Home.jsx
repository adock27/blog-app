import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h3>Home Pricipal</h3>
      <Link to='/blogs'>Ir a los blogs</Link>
    </div>
  )
}

export default Home