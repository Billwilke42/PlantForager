import React from 'react'
import './PlantCard.css'

const PlantCard = (props) => {
  return (
    <div className='plant-card'>
      <img src={props.image_url}></img>
    </div>
  )
}

export default PlantCard