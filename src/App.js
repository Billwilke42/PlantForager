import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import Nav from './Nav/Nav'
import CardContainer from './CardContainer/CardContainer'
import PlantPage from './PlantPage/PlantPage'
import { 
  resetPlantInfo, 
  setPlantPage, 
  resetPlantPage, 
  setFavoritesPage, 
  setFavorites,
  resetSearch,
  setSearch, 
  removeFavorites } from './actions'
import { getPlants } from './thunks/getPlants'
import { getPlantInfo } from './thunks/getPlantInfo'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class App extends React.Component {

  search = (searchInputValue) => {
    setTimeout(() => {
      this.props.setSearch(searchInputValue)
    })
  }

  addOrRemoveAFavorite = (e, plantInfo) => {
    e.preventDefault()
    const isFavorite = this.props.favorites.find(favorite => {
      if (favorite.id === plantInfo.id) {
        return true
      } else {
        return false
      }
    })
      if (isFavorite) {
        this.props.removeFavorites(plantInfo)
      } else {
        this.props.setFavorites(plantInfo)
      }
  }

  showFavorites = () => {
    this.props.setFavoritesPage(true)
  }
 
  handleClick = async (event) => {
    const id = event.target.id
    await this.props.setPlantPage(true)
    await this.props.getPlantInfo(id)
  }

  returnHome = () => {
    this.props.resetPlantInfo()
    this.props.resetPlantPage(false)
    this.props.setFavoritesPage(false)
  }

  componentDidMount() {
    this.props.getPlants(1)
    // this.props.getPlants(2)
    // this.props.getPlants(3)
    // this.props.getPlants(4)
    // this.props.getPlants(5)
    // this.props.getPlants(6)
  }
  
  render() {
    if (this.props.error) {
      return (
        <div className="App">
          <p className='error-msg'>Error: {this.props.error}</p>
          <p className='error-msg'>Sorry! Try Reloading the Page</p>
        </div>
      )
    }
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Nav 
              showFavorites={this.showFavorites}
              search={this.search}
            />
            <CardContainer 
              handleClick={this.handleClick} 
              addOrRemoveAFavorite={this.addOrRemoveAFavorite}
              />
          </Route>
          <Route path='/favorites'>
            <Nav returnHome={this.returnHome}/>
            <CardContainer 
              handleClick={this.handleClick} 
              addOrRemoveAFavorite={this.addOrRemoveAFavorite}
            />
           {!this.props.favoritesPage && <Redirect to='/'/>}
          </Route>
          <Route 
            exact path='/plant/:id'
            render={({match}) => {
              const { id } = match.params
                return <PlantPage
                  id={id}
                  returnHome={this.returnHome} /> 
                }}> 
                {!this.props.plantsPage && <Redirect to='/'/>}
          </Route>
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = ({ isLoading, hasErrored, setPlants, setPlantPageId, setPlantInfo, setFavorites, setFavoritesPage, setSearch, setPlantPage }) => ({
  isLoading: isLoading,
  error: hasErrored,
  plants: [].concat.apply([], setPlants),
  plantPageId: setPlantPageId,
  plantInfo: setPlantInfo,
  favorites: setFavorites,
  favoritesPage: setFavoritesPage,
  search: setSearch,
  plantsPage: setPlantPage
})

App.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  favorites: PropTypes.array,
  favoritesPage: PropTypes.bool,
  getPlantInfo: PropTypes.func,
  getPlants: PropTypes.func,
  plantInfo: PropTypes.object,
  plants: PropTypes.array,
  removeFavorites: PropTypes.func,
  resetPlantInfo: PropTypes.func,
  resetPlantPageId: PropTypes.func,
  resetSearch: PropTypes.func,
  search: PropTypes.string,
  setFavorites: PropTypes.func,
  setFavoritesPage: PropTypes.func,
  setPlantPage: PropTypes.func,
  setSearch: PropTypes.func
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ getPlants, getPlantInfo, resetPlantInfo, resetPlantPage, setPlantPage, setFavoritesPage, setFavorites, removeFavorites, setSearch, resetSearch }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
