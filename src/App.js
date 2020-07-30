import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import CardContainer from './CardContainer/CardContainer'
import PlantPage from './PlantPage/PlantPage'
import { resetPlantInfo } from './actions'
import Search from './Search/Search'
import { getPlants } from './thunks/getPlants'
import { getPlantInfo } from './thunks/getPlantInfo'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends React.Component {

  handleClick = async (event) => {
    await this.props.getPlantInfo(event.target.id)
  }

  componentDidMount() {
    this.props.getPlants(1)
    // this.props.getPlants(2)
    // this.props.getPlants(3)
    // this.props.getPlants(4)
    // this.props.getPlants(5)
    // this.props.getPlants(6)
    // this.props.getPlants(7)
  }
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Nav />
            <CardContainer handleClick={this.handleClick} />
          </Route>
          <Route path='/search'>
            <div className='find-plants'>
              <Search />
              <CardContainer />
            </div>
          </Route>
          <Route path='/favorites'>
            <Nav />
            <CardContainer />
          </Route>
          <Route 
            exact path='/plant/:id'
            render={({match}) => {
              const { id } = match.params
              return <PlantPage
                plantInfo={this.props.plantInfo}
              /> 
            }}/>
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = ({ isLoading, hasErrored, setPlants, setPlantId, setPlantInfo }) => ({
  isLoading: isLoading,
  error: hasErrored,
  plants: [].concat.apply([], setPlants),
  plantId: setPlantId,
  plantInfo: setPlantInfo
})



App.propTypes = {
  isLoading: PropTypes.bool,
  // hasErrored: PropTypes.string

}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ getPlants, getPlantInfo }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
