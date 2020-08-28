import React, { Fragment } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';
import { ShopPage } from './pages/homepage/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFormAuth = null;

  componentDidMount() {
    this.unsubscribeFormAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }

  render() {
    return (
      <Fragment>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
