import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import CardContainer from './CardContainer/CardContainer'
import { hasErrored, isLoading, incrementCurrentPage, decrementCurrentPage } from './actions'
import Search from './Search/Search'
import { getPlants } from './thunks/getPlants'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends React.Component {


  componentDidMount() {
    this.props.getPlants(1)
    this.props.getPlants(2)
    this.props.getPlants(3)
    this.props.getPlants(4)
    this.props.getPlants(5)
    this.props.getPlants(6)
    this.props.getPlants(7)
  }
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Nav />
            <CardContainer />
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


const mapStateToProps = ({ isLoading, hasErrored, setPlants, setCurrentPage }) => ({
  isLoading: isLoading,
  error: hasErrored,
  plants: [].concat.apply([], setPlants),
  page: setCurrentPage
})



App.propTypes = {
  isLoading: PropTypes.bool,
  hasErrored: PropTypes.string

}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ hasErrored, getPlants, incrementCurrentPage, decrementCurrentPage }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
