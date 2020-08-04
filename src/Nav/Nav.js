import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import berries from './berries.png'
import faveIcon from './fave-page-icon.svg'
import homeIcon from './home-icon.svg'
import PropTypes from 'prop-types';

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
    }
  }
  clearInput() {
    this.props.returnHome()
    this.setState({searchInput: ''})
  }

  handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    if(this.props.favoritesPage) {
      return (
        <header className='nav-container'>
          <img src={`${berries}`} alt='berries' className='berries'/>
        <section className='title-section-favorites'>
          <h1 className='favorites-title'><img className='fave-page-icon-title' alt='fave-page-button' src={`${faveIcon}`}/>Favorites:</h1>
        </section>
        <div className='button-section'>
          <Link to='/'>
            <button type='submit' className='nav-button' onClick={() => this.clearInput()}><img className='home-icon' alt='home-icon' src={`${homeIcon}`}></img></button>
          </Link>
        </div>
      </header>
      )
    }
    return (
      <header className='nav-container'>
        <section className='title-section'>
          <img src={`${berries}`} alt='berries' className='berries'/>
          <div>
            <h1 className='app-name'>Plant Forager</h1>
            <h4 className='app-explanation'>A Field Guide to Edible Plants Around the World</h4>
          </div>
        </section>
          <form 
            className={'search-form'}
            onSubmit={this.props.search ? this.props.search(this.state.searchInput) : null}>
            <label className='search-input'>
              <input
                className='find'
                type='text'
                name='searchInput'
                placeholder='Search by Common Name'
                value={this.state.searchInput}
                onChange={e => this.handleChange(e)}
              />
            </label>
          </form>
        <div className='button-section'>
          <Link to='/favorites'>
            <button type='submit' className='nav-button' onClick={() => this.props.showFavorites()}><img className='fave-page-icon' alt='fave-page-icon' src={`${faveIcon}`}/></button>
          </Link>
        </div>
      </header>
    )
  }
}

Nav.propTypes = {
  favoritesPage: PropTypes.bool,
  search: PropTypes.func,
  showFavorites: PropTypes.func
}

const mapStateToProps = ({ setFavoritesPage }) => ({
  favoritesPage: setFavoritesPage,
})

export default connect(mapStateToProps, null)(Nav);