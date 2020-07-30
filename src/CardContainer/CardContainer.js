import React from 'react'
import './CardContainer.css'
import PlantCard from '../PlantCard/PlantCard'
import { getPlants } from '../thunks/getPlants'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hasErrored } from '../actions'
import { getPlantInfo } from '../thunks/getPlantInfo'

const CardContainer = (props) => {
  if(props.plants.length > 0) {
    const plantsCopy = []
    const removeNullPlants = () => {
      if (props.plants.length > 0) {
        props.plants.filter((plant, i) => {
          if (plant.image_url !== null) {
              plantsCopy.push(plant) 
            }
          })
      }
    }

    removeNullPlants()
    const displayCards = plantsCopy.map(plant => (
      <PlantCard {...plant}
        key={plant.id}
        id={plant.id}
        handleClick={props.handleClick}
      />
    ))

    return (
      <section className='card-container'>
        {displayCards}
      </section>
    )
  }
      return (
        <p>Loading</p>
      )
}


const mapStateToProps = ({ isLoading, hasErrored, setPlants }) => ({
  isLoading: isLoading,
  error: hasErrored,
  plants: [].concat.apply([], setPlants),
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ hasErrored, getPlants, getPlantInfo }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
