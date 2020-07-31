import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setFavoritesPage } from '../actions'

const Nav = (props) => {
  if(props.favoritesPage) {
    return (
      <header className='nav-container'>
      <h1>Plant Forager</h1>
      <div className='button-section'>
        {/* <Link to='/search'>
          <button type='submit'>Search</button>
        </Link> */}
        <Link to='/'>
          <button type='submit' onClick={() => props.returnHome()}>Home</button>
        </Link>
      </div>
    </header>
    )
  }
  return (
    <header className='nav-container'>
      <h1>Plant Forager</h1>
      <div className='button-section'>
        {/* <Link to='/search'>
          <button type='submit'>Search</button>
        </Link> */}
        <Link to='/favorites'>
          <button type='submit' onClick={() => props.showFavorites()}>Favorites</button>
        </Link>
      </div>
    </header>
  )
}

const mapStateToProps = ({ setFavoritesPage}) => ({
  favoritesPage: setFavoritesPage
})

export default connect(mapStateToProps, null)(Nav);