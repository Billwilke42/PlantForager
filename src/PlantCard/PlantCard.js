import React from 'react'
import './PlantCard.css'

const PlantCard = (props) => {
  return (
    <div className='plant-card'>
      <img src={props.image_url}></img>
      <div className='card-bottom'>
        {props.common_name}<br></br> 
        {props.scientific_name}
      </div>
    </div>
  )
}

export default PlantCard