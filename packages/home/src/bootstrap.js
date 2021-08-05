import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const mount = (rootElementRef) => {
  ReactDOM.render(<App />, rootElementRef);
};

const mountInIsolation = (elementRef) => {
  ReactDOM.render(<App />, elementRef);
};

const init = () => {
  const homeRoot = document.querySelector('#_home_root');

  if (homeRoot) {
    mountInIsolation(homeRoot);
  }
};

init();

export { mount };
