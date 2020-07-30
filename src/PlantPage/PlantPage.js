import React from 'react'

const PlantPage = (props) => {
  if (props.plantInfo.length > 0) { 
    return (
      <section className='plant-page'>
        <section className='upper-section'>
          <img
          src={props.plantInfo[0].image_url}
          alt={props.plantInfo[0].common_name}
          />
          <div className='info'>
            <h2>{props.plantInfo[0].common_name}</h2>
            <h4>{props.plantInfo[0].scientific_name}</h4>
            <p>Family Name: {props.plantInfo[0].family_common_name}<span>{props.plantInfo[0].family}</span></p>
            <p>Locations: {props.plantInfo[0].observations} </p>
            <p>First Published: {props.plantInfo[0].year}</p>
          </div>
        </section>
        <section className='lower-images'>
        </section>
      </section>
  )} else {
    return <p>Loading</p>
  }
}

export default PlantPage