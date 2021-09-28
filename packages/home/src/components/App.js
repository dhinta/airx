import { Router, Switch, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import './App.css';
import Landing from './landing/Landing';
import Contact from './contact/Contact';
import AboutUs from './about-us/about-us';

const App = ({ history }) => {
  return (
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
  );
};

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default App;
