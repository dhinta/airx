import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { getBrowserHistory, getMemoryHistory } from './helpers/history';

const getConfig = (history) => {
  return {
    onRouteChange(newPathname) {
      const {
        location: { pathname },
      } = history;
      if (pathname !== newPathname) {
        history.push(newPathname);
      }
    },
  };
};

const bindHistoryChange = (history, onNavigate) => {
  history.listen((location) => {
    onNavigate(location);
  });
};

const mount = (rootElementRef, { onNavigate }, navigationUrl) => {
  const history = getMemoryHistory();
  history.push(navigationUrl);
  bindHistoryChange(history, onNavigate);
  ReactDOM.render(<App history={history} />, rootElementRef);
  return getConfig(history);
};

const mountInIsolation = (elementRef) => {
  const history = getBrowserHistory();
  ReactDOM.render(<App history={history} />, elementRef);
};

const init = () => {
  const homeRoot = document.querySelector('#_home_root');

  if (homeRoot) {
    mountInIsolation(homeRoot);
  }
};

init();

export { mount };
