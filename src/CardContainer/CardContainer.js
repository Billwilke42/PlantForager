import React from 'react'
import './CardContainer.css'
import PlantCard from '../PlantCard/PlantCard'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getPlants } from '../thunks/getPlants'
import {
  incrementCurrentPage,
  decrementCurrentPage,
  resetCurrentPage,
  hasErrored,
  setPlants,

} from '../actions'

class CardContainer extends React.Component {
    constructor(props) {
      super(props)
    }

    removeNullPlants = () => {
      const plantsCopy = [];
      if (this.props.plants.length > 0) {
        this.props.plants.filter((plant, i) => {
          if (plant.image_url !== null) {
              plantsCopy.push(plant) 
            }
          })
      }
      return plantsCopy
    }

    render() {
      if (this.props.plants.length > 0) {
        const plants = this.removeNullPlants()
          const displayCards = plants.map(plant => (
            <PlantCard {...plant}
              key={plant.id}/>
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
}

const mapStateToProps = ({ isLoading, hasErrored, setPlants, setCurrentPage }) => ({
  isLoading: isLoading,
  error: hasErrored,
  plants: [].concat.apply([], setPlants),
  page: setCurrentPage
})


const mapDispatchToProps = dispatch => (
  bindActionCreators({ hasErrored, getPlants, incrementCurrentPage, decrementCurrentPage, resetCurrentPage }, dispatch))


export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)