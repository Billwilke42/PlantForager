import React from 'react'
import './CardContainer.css'
import PlantCard from '../PlantCard/PlantCard'

const CardContainer = () => {
  const testArr = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
  const display = testArr.map(obj => {
    return (
      <PlantCard />
    )
  })
  return (
    <section className='card-container'>
      {display}
    </section>
  )
}

export default CardContainer