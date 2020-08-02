import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import Nav from './Nav/Nav'
import CardContainer from './CardContainer/CardContainer'
import PlantPage from './PlantPage/PlantPage'
import { 
  setPlantsFromLocation,
  resetPlantsFromLocation,
  resetPlantInfo, 
  setPlantPageId, 
  resetPlantPageId, 
  setFavoritesPage, 
  setFavorites,
  resetSearch,
  setSearch, 
  removeFavorites } from './actions'
import { getPlants } from './thunks/getPlants'
import { getPlantInfo } from './thunks/getPlantInfo'
import { getPlantsInLocation } from './thunks/getPlantsInLocation'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends React.Component {

  findPlantsInLocation = (e, locationZone) => {
    e.preventDefault()
    this.props.getPlantsInLocation(locationZone)
  }

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
    await this.props.setPlantPageId(id)
    await this.props.getPlantInfo(id)
  }

  returnHome = () => {
    this.props.resetPlantInfo()
    this.props.resetPlantPageId()
    this.props.setFavoritesPage(false)
  }

  pictureModal = (url) => {
    console.log(url)
   if (url) {
     return (
      <img
      className='plant-pic-plant-page'
      src={url}
      alt={this.props.plantInfo.common_name}
      />
     )
   }
  }
  


  componentDidMount() {
    // this.props.getPlants(1)
    // this.props.getPlants(2)
    // this.props.getPlants(3)
    // this.props.getPlants(4)
    // this.props.getPlants(5)
    this.props.getPlants(6)
  }
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Nav 
              showFavorites={this.showFavorites}
              search={this.search}
              findPlantsInLocation={this.findPlantsInLocation}
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
            {!this.props.plants && <Redirect to='/'/>}
          </Route>
          <Route 
            exact path='/plant/:id'
            render={({match}) => {
              const { id } = match.params
                return <PlantPage
                  pictureModal={this.pictureModal}
                  returnHome={this.returnHome} /> 
                }}> 
                {!this.props.plantPageId && <Redirect to='/'/>}
          </Route>
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = ({ isLoading, hasErrored, setPlants, setPlantPageId, setPlantInfo, setFavorites, setFavoritesPage, setSearch, setPlantsFromLocation }) => ({
  isLoading: isLoading,
  error: hasErrored,
  plants: [].concat.apply([], setPlants),
  plantPageId: setPlantPageId,
  plantInfo: setPlantInfo,
  favorites: setFavorites,
  favoritesPage: setFavoritesPage,
  search: setSearch,
  plantsFromLocation: setPlantsFromLocation
})

App.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  favorites: PropTypes.array,
  favoritesPage: PropTypes.bool,
  getPlantInfo: PropTypes.func,
  getPlants: PropTypes.func,
  getPlantsInLocation: PropTypes.func,
  plantInfo: PropTypes.object,
  plantPageId: PropTypes.number,
  plants: PropTypes.array,
  plantsFromLocation: PropTypes.array,
  removeFavorites: PropTypes.func,
  resetPlantInfo: PropTypes.func,
  resetPlantPageId: PropTypes.func,
  resetSearch: PropTypes.func,
  search: PropTypes.string,
  setFavorites: PropTypes.func,
  setFavoritesPage: PropTypes.func,
  setPlantPageId: PropTypes.func,
  setSearch: PropTypes.func
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ getPlants, getPlantInfo, resetPlantInfo, setPlantPageId, resetPlantPageId, setFavoritesPage, setFavorites, removeFavorites, setSearch, resetSearch, getPlantsInLocation }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
