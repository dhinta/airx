import { createBrowserHistory, createMemoryHistory } from 'history';

let history = null;
export const getBrowserHistory = () => {
  history = createBrowserHistory();
  return history;
};
export const getMemoryHistory = () => {
  history = createMemoryHistory();
  return history;
};
export const getHistory = () => {
  return history;
};
