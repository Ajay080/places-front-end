import React from 'react'
import { BrowserRouter as Router , Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'


function App() {
  return (
  <Router>
    <Switch>
    <Route path='/' exact={true}>
      <Users />
    </Route>
    <Route path='/places/new' exact={true}>
      <NewPlace />
    </Route>
    <Redirect to ='/'/>
    </Switch>
  </Router>
  
  );
}

export default App;
