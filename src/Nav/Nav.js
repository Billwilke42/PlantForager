import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header className='nav-container'>
      <h1>Plant Forager</h1>
      <div className='button-section'>
        <Link to='/search'>
          <button type='submit'>Search</button>
        </Link>
        <button type='submit'>Favorites</button>
      </div>
    </header>
  )
}

export default Nav