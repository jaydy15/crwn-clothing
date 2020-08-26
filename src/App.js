import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop/hats' component={HatsPage} />
    </Switch>
  );
}

export default App;
