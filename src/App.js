import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import Nav from './Nav/Nav'
import CardContainer from './CardContainer/CardContainer'
import PlantPage from './PlantPage/PlantPage'
import { resetPlantInfo, setPlantPageId, resetPlantPageId, setFavoritesPage, setFavorites, removeFavorites } from './actions'
import Search from './Search/Search'
import { getPlants } from './thunks/getPlants'
import { getPlantInfo } from './thunks/getPlantInfo'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends React.Component {

  addOrRemoveAFavorite = (e, plantInfo) => {
    e.preventDefault()
    const isFavorite = this.props.favorites.find(favorite => {
      if (favorite.id === plantInfo.id) {
        return true
      } else {
        return false
      }
    })
      if(isFavorite) {
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

  componentDidMount() {
    this.props.getPlants(1)
    // this.props.getPlants(2)
    // this.props.getPlants(3)
    // this.props.getPlants(4)
    // this.props.getPlants(5)
    // this.props.getPlants(6)
    // this.props.getPlants(7)
  }
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Nav showFavorites={this.showFavorites}/>
            <CardContainer 
              handleClick={this.handleClick} 
              addOrRemoveAFavorite={this.addOrRemoveAFavorite}
              />
          </Route>
          <Route path='/search'>
            <div className='find-plants'>
              <Search />
              <CardContainer />
            </div>
          </Route>
          <Route path='/favorites'>
            <Nav returnHome={this.returnHome}/>
            <CardContainer 
              handleClick={this.handleClick} 
              addOrRemoveAFavorite={this.addOrRemoveAFavorite}
            />
          </Route>
          <Route 
            exact path='/plant/:id'
            render={({match}) => {
              const { id } = match.params
                return <PlantPage
                  returnHome={this.returnHome} /> 
                }}> 
                {!this.props.plantPageId && <Redirect to='/'/>}
          </Route>
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = ({ isLoading, hasErrored, setPlants, setPlantPageId, setPlantInfo, setFavorites, setFavoritesPage }) => ({
  isLoading: isLoading,
  error: hasErrored,
  plants: [].concat.apply([], setPlants),
  plantPageId: setPlantPageId,
  plantInfo: setPlantInfo,
  favorites: setFavorites,
  favoritesPage: setFavoritesPage,
})



App.propTypes = {
  isLoading: PropTypes.bool,
  // hasErrored: PropTypes.string

}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ getPlants, getPlantInfo, resetPlantInfo, setPlantPageId, resetPlantPageId, setFavoritesPage, setFavorites, removeFavorites }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
