import React from 'react'
import './PlantPage.css'
import { isLoading } from '../actions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const PlantPage = (props) => {
  if(props.isLoading) {
    return <p>Loading...</p>
  }
   if (!props.isLoading && props.plantInfo !== {} && props.plantPageId) { 
    return (
      <section className='plant-page'>
      <header className='return-home'>
        <button type='submit' onClick={e => props.returnHome()}>Return Home</button>
      </header>
        <section className='upper-section'>
          <img
          src={props.plantInfo.image_url}
          alt={props.plantInfo.common_name}
          />
          <div className='info'>
            <h2>{props.plantInfo.common_name}</h2>
            <h4>{props.plantInfo.scientific_name}</h4>
            <p>Family Name: {props.plantInfo.family_common_name}<span>{props.plantInfo.family}</span></p>
            <p>Locations: {props.plantInfo.observations} </p>
            <p>First Published: {props.plantInfo.year}</p>
          </div>
        </section>
        <section className='lower-images'>
        </section>
      </section>
  )} 
}

const mapStateToProps = ({ isLoading, hasErrored, setPlantPageId, setPlantInfo }) => ({
  isLoading: isLoading,
  error: hasErrored,
  plantPageId: setPlantPageId,
  plantInfo: setPlantInfo
})



// PlantPage.propTypes = {
//   isLoading: PropTypes.bool,
//   // hasErrored: PropTypes.string

// }
export default connect(mapStateToProps, null)(PlantPage);