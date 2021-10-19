import { PropTypes } from 'prop-types';
import { Router, Switch, Route } from 'react-router-dom';
import Login from './login/Login';
import Signup from './signup/Signup';

const App = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default App;
