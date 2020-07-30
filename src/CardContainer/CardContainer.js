import React from 'react'
import './CardContainer.css'
import PlantCard from '../PlantCard/PlantCard'

const CardContainer = (props) => {
  if(props.plants.length > 0) {
    const displayCards = props.plants[0].map(plant => (

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

export default CardContainer