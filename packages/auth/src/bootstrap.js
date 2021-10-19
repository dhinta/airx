import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { applyMiddleware, createStore } from 'redux';
// import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

// import reducers from './reducers';
// import App from './components/App';
import { getMemoryHistory } from './helpers/history';

// const getConfig = (history) => {
//   return {
//     onRouteChange(newPathname) {
//       const {
//         location: { pathname },
//       } = history;
//       if (pathname !== newPathname) {
//         history.push(newPathname);
//       }
//     },
//   };
// };

const bindHistoryChange = (history, onNavigate) => {
  history.listen((location) => {
    onNavigate(location);
  });
};

// const store = createStore(
//   reducers,
//   composeWithDevTools(applyMiddleware(thunk)),
// );

const mount = (rootElementRef, { onNavigate }, navigationUrl) => {
  const history = getMemoryHistory();
  history.push(navigationUrl);
  bindHistoryChange(history, onNavigate);
  ReactDOM.render(
    <StrictMode>
      <Provider store={store}>
        {/* <App history={history} /> */}
        <h1>Auth App</h1>
      </Provider>
    </StrictMode>,
    rootElementRef,
  );
  return getConfig(history);
};

const mountInIsolation = (elementRef) => {
  // const history = getBrowserHistory();
  // bindHistoryChange(history);
  ReactDOM.render(
    <StrictMode>
      {/* <Provider store={store}> */}
      {/* <App history={history} /> */}
      <h1>Auth App</h1>
      {/* </Provider> */}
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
