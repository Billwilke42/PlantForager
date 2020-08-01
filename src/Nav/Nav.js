import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setFavoritesPage } from '../actions'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      location: ''
    }
  }
  clearInput() {
    debugger
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
        <h1>Plant Forager</h1>
        <div className='button-section'>
          <Link to='/'>
            <button type='submit' onClick={() => this.clearInput()}>Home</button>
          </Link>
        </div>
      </header>
      )
    }
    return (
      <header className='nav-container'>
        <h1>Plant Forager</h1>
          <form 
          className='search-form'
          onSubmit={this.props.search(this.state.searchInput)}>
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
          <form className='location-search'>
            <select name='location' onChange={this.handleChange} data-testid='42' aria-label='Location drop down menu'>
                <option>Select a Location...</option>
                <option value='407'>Africa</option>
                <option value='745'>Antarctic</option>
                <option value='443'>Asia - Temperate</option>
                <option value='504'>Asia - Tropical</option>
                <option value='556'>Australia</option>
                <option value='644'>Central America</option>
                <option value='369'>Europe</option>
                <option value='595'>North America</option>
                <option value='674'>South America</option>
            </select>
            <button type='submit' className='location-btn' onClick={e => this.props.findPlantsInLocation(e, parseInt(this.state.location))}>Enter</button>
          </form>
        <div className='button-section'>
          <Link to='/favorites'>
            <button type='submit' onClick={() => this.props.showFavorites()}>Favorites</button>
          </Link>
        </div>
      </header>
    )
  }
}

const mapStateToProps = ({ setFavoritesPage}) => ({
  favoritesPage: setFavoritesPage
})

export default connect(mapStateToProps, null)(Nav);