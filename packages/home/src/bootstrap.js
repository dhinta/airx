import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import getHistory from './helpers/history';

const mount = (rootElementRef) => {
  const history = getHistory();
  ReactDOM.render(<App history={history} />, rootElementRef);
};

const mountInIsolation = (elementRef) => {
  const history = getHistory();
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
