import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import CardContainer from './CardContainer/CardContainer'
import Search from './Search/Search'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

const App = () => {
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

const mapStateToProps = ({ isLoading, hasErrored }) => ({
  isLoading: isLoading,
  error: hasErrored,
})

App.propTypes = {
  isLoading: PropTypes.bool,
  hasErrored: PropTypes.string

}

export default connect(mapStateToProps)(App);
