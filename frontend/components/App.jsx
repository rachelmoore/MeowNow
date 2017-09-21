import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import Frontpage from './hero/frontpage'
import GreetingContainer from './hero/greeting_container';
import SessionFormContainer from './session_form/session_form_container'
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <AuthRoute exact path="/" component={SessionFormContainer} />
    <AuthRoute exact path="/" component={Frontpage} />
    <Route exact path="/home" component={GreetingContainer} />
  </div>
);

export default App;
