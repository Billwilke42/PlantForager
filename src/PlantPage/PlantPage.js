import React from 'react'
import './PlantPage.css'
import { isLoading } from '../actions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import homeIcon from '../Nav/home-icon.svg'

const PlantPage = (props) => {
  if(props.isLoading) {
    return <p>Loading...</p>
  }
  if (!props.isLoading && props.plantInfo !== {} && props.plantPageId) { 
    let images;
    if(props.plantInfo.images) {
      images = [...props.plantInfo.images.bark, ...props.plantInfo.images.flower, ...props.plantInfo.images.fruit, ...props.plantInfo.images.habit, ...props.plantInfo.images.leaf,  ...props.plantInfo.images.other]
    }
    const pictureModal = (e) => {
      console.log(e)
      console.log(e.target.value)
      return (
        <section className='picture-modal'>
          <header><button type='submit'></button></header>
          <img src={`${e.target.value}`}></img>
        </section>
      )
    }
    return (
      <section className='plant-page'>
      
      <header className='return-home'>
      <button type='submit' className='nav-button-plant-page' onClick={() => props.returnHome()}><img className='rtrn-home-i' src={`${homeIcon}`}></img></button>
      </header>
        <section className='upper-section'>
          <img
          className='plant-pic-plant-page'
          src={props.plantInfo.image_url}
          alt={props.plantInfo.common_name}
          />
          <div className='info'>
            <h2 className='common-name'>{props.plantInfo.common_name}</h2>
            <h4>{props.plantInfo.scientific_name}</h4>
            <p className='info-tag'>Family Name: </p><p> {props.plantInfo.family_common_name}<span className='family'> {props.plantInfo.family}</span></p>
            <p className='info-tag'>Locations:</p><p> {props.plantInfo.observations} </p>
            <p className='info-tag'>First Published:</p><p> {props.plantInfo.year}</p>
          </div>
        </section>
        <section className='lower-images'>
          {images && images.map(image => {
            return (
          

                <img src={image.image_url} className='lil-pic' value={image.image_url} onClick={e => props.pictureModal(e) } className='tiny-pics' key={image.id} id={image.id}/>
            )
          })}
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