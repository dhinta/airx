import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';

const mount = (rootElementRef) => {
  ReactDOM.render(<App />, rootElementRef);
};

const mountInIsolation = (elementRef) => {
  ReactDOM.render(<App />, elementRef);
};

const init = () => {
  const headerRoot = document.querySelector('#_header_root');

  if (headerRoot) {
    mountInIsolation(headerRoot);
  }
};

init();

export { mount };
