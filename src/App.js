import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import CardContainer from './CardContainer/CardContainer'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Nav />
            <CardContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
