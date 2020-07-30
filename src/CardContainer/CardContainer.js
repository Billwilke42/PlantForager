import React from 'react'
import './CardContainer.css'
import PlantCard from '../PlantCard/PlantCard'

const CardContainer = (props) => {
  if(props.plants.length > 0) {
    const plantsCopy = []
    const removeNullPlants = () => {
      if (props.plants.length > 0) {
        props.plants[0].filter((plant, i) => {
          if (plant.image_url !== null) {
              plantsCopy.push(plant) 
            }
          })
      }
    }
    removeNullPlants()
    const displayCards = plantsCopy.map(plant => (
      <PlantCard {...plant}
        key={plant.id}/>
    ))

    return (
      <section className='card-container'>
        {displayCards}
          <div className='page-turner'>
            <button type='submit'>Prev Page</button>
            <button type='submit'>Next Page</button>
          </div>
      </section>
    )
  }
      return (
        <p>Loading</p>
      )
}

export default CardContainer