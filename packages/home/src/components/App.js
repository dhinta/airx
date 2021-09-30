import { Router, Switch, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { Footer } from '@airx/fragments';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './pages/landing/Landing';
import Contact from './pages/contact/Contact';
import AboutUs from './pages/about-us/about-us';

const App = ({ history }) => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
        </Switch>
      </Router>
      <Footer selectedTheme="dark" />
    </>
  );
};

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default App;
