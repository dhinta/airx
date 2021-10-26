import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise';
import { combineReducers } from 'redux';

import reducers from './reducers';
import { fragmentReducers } from '@airx/fragments';
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

const store = createStore(
  combineReducers({...reducers, ...fragmentReducers}),
  composeWithDevTools(applyMiddleware(thunk, promiseMiddleware)),
);

const mount = (rootElementRef, { onNavigate }, navigationUrl) => {
  const history = getMemoryHistory();
  history.push(navigationUrl);
  bindHistoryChange(history, onNavigate);
  ReactDOM.render(
    <StrictMode>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </StrictMode>,
    rootElementRef,
  );
  return getConfig(history);
};

const mountInIsolation = (elementRef) => {
  const history = getBrowserHistory();

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
  const headerRoot = document.querySelector('#_auth_root');

  if (headerRoot) {
    mountInIsolation(headerRoot);
  }
};

init();

export { mount };
