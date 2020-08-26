import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';
import { ShopPage } from './pages/homepage/shop/ShopPage';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
    </Switch>
  );
}

export default App;
