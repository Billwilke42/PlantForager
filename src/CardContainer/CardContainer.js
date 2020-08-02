import React from 'react'
import './CardContainer.css'
import PlantCard from '../PlantCard/PlantCard'
import { getPlants } from '../thunks/getPlants'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hasErrored, setFavoritesPage, setPlantsFromLocation } from '../actions'
import { getPlantInfo } from '../thunks/getPlantInfo'

const CardContainer = (props) => {
  if (props.favoritesPage) {
    const favoritePlants = props.favorites.map(plant => (
      <PlantCard 
        plant = {plant}
        key={plant.id}
        id={plant.id}
        handleClick={props.handleClick}
        addOrRemoveAFavorite={props.addOrRemoveAFavorite}
      />
    ))
    return (
      <section className='cards-container'>
        {favoritePlants}
      </section>
    )
  }
  if (props.plants.length > 0) {
    const plantsCopy = []
    const removeNullPlants = () => {
      if (props.plants.length > 0) {
        props.plants.filter((plant, i) => {
          if (plant.image_url !== null && plant.common_name !== null) {
              plantsCopy.push(plant) 
            }
          })
      }
    }
    removeNullPlants()
    if(props.search) {
    
      const searchedPlants = plantsCopy.filter(plant => {
        if(plant.common_name.includes(props.search)) {
          return plant
        }
      }) 
      const searchedPlantCards = searchedPlants.map(plant => (
        <PlantCard 
          plant = {plant}
          key={plant.id}
          id={plant.id}
          handleClick={props.handleClick}
          addOrRemoveAFavorite={props.addOrRemoveAFavorite}
        />
      ))
      return (
        <section className='cards-container'>
          {searchedPlantCards}
        </section>
      )
    }
    const displayCards = plantsCopy.map(plant => (
      <PlantCard 
        plant = {plant}
        key={plant.id}
        id={plant.id}
        handleClick={props.handleClick}
        addOrRemoveAFavorite={props.addOrRemoveAFavorite}
      />
    ))

    return (
      <section className='cards-container'>
        {displayCards}
      </section>
    )
  }
  return (
    <p className='animate'>Loading</p>
  )
}

CardContainer.propTypes = {
  addOrRemoveAFavorite: PropTypes.func,
  error: PropTypes.string,
  favorites: PropTypes.array,
  favoritesPage: PropTypes.bool,
  getPlantInfo: PropTypes.func,
  getPlants: PropTypes.func,
  handleClick: PropTypes.func,
  hasErrored: PropTypes.func,
  isLoading: PropTypes.bool,
  plants: PropTypes.array,
  plantsFromLocation: PropTypes.array,
  search: PropTypes.string,
}

const mapStateToProps = ({ isLoading, hasErrored, setPlants, setFavoritesPage, setFavorites, setSearch, setPlantsFromLocation }) => ({
  isLoading: isLoading,
  error: hasErrored,
  plants: [].concat.apply([], setPlants),
  favorites: setFavorites,
  favoritesPage: setFavoritesPage,
  search: setSearch,
  plantsFromLocation: setPlantsFromLocation
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ hasErrored, getPlants, getPlantInfo }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
