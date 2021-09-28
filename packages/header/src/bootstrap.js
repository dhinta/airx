import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import App from './components/App';
import getHistory from './helpers/history';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

const mount = (rootElementRef) => {
  const history = getHistory();
  ReactDOM.render(
    <StrictMode>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </StrictMode>,
    rootElementRef,
  );
};

const mountInIsolation = (elementRef) => {
  const history = getHistory();
  ReactDOM.render(
    <StrictMode>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </StrictMode>,
    elementRef,
  );
};

const init = () => {
  const headerRoot = document.querySelector('#_header_root');

  if (headerRoot) {
    mountInIsolation(headerRoot);
  }
};

init();

export { mount };
