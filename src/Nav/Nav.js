import React from 'react';
import './Nav.css'

const Nav = () => {
  return (
    <header className='nav-container'>
      <h1>Plant Forager</h1>
      <div className='button-section'>
        <button type='submit'>Search</button>
        <button type='submit'>Favorites</button>
      </div>
    </header>
  )
}

export default Nav