import React from 'react'
import './PlantCard.css'
import { Link } from 'react-router-dom'

const PlantCard = (props) => {
  return (
    <div className='plant-card'>
      {/* <Link to={`/plant/${props.id}`}> */}
        <img 
        src={props.image_url}
        // onClick={props.handleClick}
        alt={`${props.common_name}`}
        />
      {/* </Link> */}
      <div className='card-bottom'>
        {props.common_name}<br></br> 
        {props.scientific_name}
      </div>
    </div>
  )
}

export default PlantCard