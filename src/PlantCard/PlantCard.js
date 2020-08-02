import React from 'react'
import './PlantCard.css'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setFavorites, setPlantInfo } from '../actions'
import heartOutlineIcon from './heart-outline.png'
import redHeartIcon from './heart-red.png'
import PropTypes from 'prop-types';

const PlantCard = (props) => {
  const isFavorite = props.favorites.find(favorite => {
    if(favorite.id === props.plant.id) {
      return true
    } else {
      return false
    }
  })
  return (
    <div className='plant-card'>
      <Link to={`/plant/${props.plant.id}`}>
        <div className='favorite-bar'>
          <img alt='fave-icon' 
            src={isFavorite ? redHeartIcon : heartOutlineIcon} 
            className='fave-icon'
            onClick={e => props.addOrRemoveAFavorite(e, props.plant)}
          />
        </div>
        <img 
          className='plant-pic'
          id={props.plant.id}
          data-testid={props.plant.id}
          src={props.plant.image_url}
          alt={`${props.plant.common_name}`}
          onClick={e => props.handleClick(e)}
        />
      </Link>
      <div className='card-bottom'>
        {props.plant.common_name}<br></br> 
        <i>{props.plant.scientific_name}</i>
      </div>
    </div>
  )
}

PlantCard.propTypes = {
  addOrRemoveAFavorite: PropTypes.func,
  favorites: PropTypes.array,
  handleClick: PropTypes.func,
  id: PropTypes.number,
  plant: PropTypes.object,
  plantInfo: PropTypes.object
}

const mapStateToProps = ({ setFavorites, setPlantInfo }) => ({
  favorites: setFavorites,
  plantInfo: setPlantInfo
})

export default connect(mapStateToProps, null)(PlantCard);