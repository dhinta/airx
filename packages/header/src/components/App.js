import { Router } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Menu from './menu/Menu';

const App = ({ history }) => {
  return (
    <Router history={history}>
      <Menu />
    </Router>
  );
};

App.propTypes = {
  history: PropTypes.object,
};

export default App;
