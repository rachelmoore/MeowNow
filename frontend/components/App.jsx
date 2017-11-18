import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import Frontpage from './hero/frontpage'
import GreetingContainer from './hero/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import HeroContainer from './hero/hero_container';
import LocationsIndexContainer from './locations/locations_index_container';
import LocationShowContainer from './locations/location_show_container';
import PublicCatContainer from './footer/public_cat_container';
import AboutContainer from './footer/about_container';
import FooterContainer from './footer/footer_container';
// import AdoptableContainer from './features/adoptable_container';
// import ShopContainer from './features/shop_container';
import { AuthRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="Site">
    <header>
      <Route path="/" component={SessionFormContainer} />
      <Route path="/" component={GreetingContainer} />
    </header>
    <main className="main">
      <Route exact path="/" component={HeroContainer} />
      <Route exact path="/home" component={HeroContainer} />
      <Route exact path="/locations" component={LocationsIndexContainer} />
      <Route exact path="/locations/:locationId" component={LocationShowContainer} />
      <Route exact path="/publiccat" component={PublicCatContainer} />
      <Route exact path="/about" component={AboutContainer} />
    </main>
    <footer>
      <Route path="/" component={FooterContainer} />
    </footer>
  </div>
);

export default App;
