import React, { Fragment } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';
import { ShopPage } from './pages/homepage/shop/ShopPage';
import Header from './components/header/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
