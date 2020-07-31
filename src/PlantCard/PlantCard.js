import React from 'react'
import './PlantCard.css'
import { Link } from 'react-router-dom'

const PlantCard = (props) => {
  return (
    <div className='plant-card'>
      <Link to={`/plant/${props.id}`}>
        <img 
        className='plant-pic'
        id={props.id}
        data-testid={props.id}
        src={props.image_url}
        alt={`${props.common_name}`}
        onClick={e => props.handleClick(e)}
        />
      </Link>
      <div className='card-bottom'>
        {props.common_name} 
        {props.scientific_name}
      </div>
    </div>
  )
}

export default PlantCard