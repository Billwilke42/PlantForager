import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import CardContainer from './CardContainer/CardContainer'
import { hasErrored, isLoading } from './actions'
import Search from './Search/Search'
import { getPlants } from './thunks/getPlants'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends React.Component {

  componentDidMount() {
    this.setState({ plants: this.props.getPlants()})
  }
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Nav />
            <CardContainer plants={this.props.plants} />
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
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = ({ isLoading, hasErrored, setPlants }) => ({
  isLoading: isLoading,
  error: hasErrored,
  plants: setPlants
})



App.propTypes = {
  isLoading: PropTypes.bool,
  hasErrored: PropTypes.string

}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ hasErrored, getPlants }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
