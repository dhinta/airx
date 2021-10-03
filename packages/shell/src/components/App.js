import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import Header from './app-wrapper/Header';
import Home from './app-wrapper/Home';

const App = () => {
  return (
    <Router>
      <Route path="/" component={AppRoot} />
    </Router>
  );
};

const AppRoot = ({ history }) => {
  const [headerConfig, setHeaderConfig] = useState(null);
  const [homeConfig, setHomeConfig] = useState(null);
  const [navigationUrl, setNavigationUrl] = useState(history.location.pathname);

  console.log(navigationUrl);

  useEffect(() => {
    if (!homeConfig || !headerConfig) {
      return;
    }
    headerConfig.onRouteChange(navigationUrl);
    homeConfig.onRouteChange(navigationUrl);
    history.push(navigationUrl);
  }, [navigationUrl]);

  const config = {
    onNavigate({ pathname: newPathname }) {
      const {
        location: { pathname },
      } = history;
      if (pathname !== newPathname) {
        setNavigationUrl(newPathname);
      }
    },
  };

  return (
    <>
      <Header
        config={config}
        setHeaderConfig={setHeaderConfig}
        navigationUrl={navigationUrl}
      />
      <Home
        config={config}
        setHomeConfig={setHomeConfig}
        navigationUrl={navigationUrl}
      />
    </>
  );
};

AppRoot.propTypes = {
  history: PropTypes.object,
};

export default App;
