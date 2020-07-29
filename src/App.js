import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import CardContainer from './CardContainer/CardContainer'
import Search from './Search/Search'

function App() {
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

export default App;
