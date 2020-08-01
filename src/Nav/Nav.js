import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setFavoritesPage } from '../actions'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: ''
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