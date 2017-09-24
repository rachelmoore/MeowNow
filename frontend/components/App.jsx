import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import Frontpage from './hero/frontpage'
import GreetingContainer from './hero/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import HeroContainer from './hero/hero_container';
import LocationsIndexContainer from './locations/locations_index_container';
import LocationShowContainer from './locations/location_show_container';
// import AdoptableContainer from './features/adoptable_container';
// import ShopContainer from './features/shop_container';
import { AuthRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <AuthRoute exact path="/" component={SessionFormContainer} />
      <ProtectedRoute exact path="/home" component={GreetingContainer} />
    </header>
    <main className="main">
      <Route exact path="/" component={HeroContainer} />
      <Route exact path="/home" component={HeroContainer} />
      <Route exact path="/locations" component={LocationsIndexContainer} />
      <Route exact path="/locations/:locationId" component={LocationShowContainer} />
    </main>
  </div>
);

export default App;
