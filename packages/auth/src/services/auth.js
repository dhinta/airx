import ACTION_TYPES from '../actions/types';
import { ALERT_ACTIONS } from '@airx/fragments';
import api from '../helpers/api';
import { getHistory } from '../helpers/history';

export const checkEmailExists = (email) => {
  return api.get(`/auth/isEmailExist?email=${email}`);
};

export const doSignup = (payload) => {
  return api.post(`/auth/signup`, payload);
};

export const doLogin = (payload) => {
  return api.post(`/auth/login`, payload);
};

export const onLoginSuccess = (dispatch, data) => {
  const history = getHistory();
  dispatch({
    type: ACTION_TYPES.DO_LOGIN,
    payload: true,
  });
  sessionStorage.setItem('authToken', data.token);
  dispatch(ALERT_ACTIONS.clear());
  history.push('/');
};

export const onLoginFailure = (dispatch, message) => {
  dispatch({
    type: ACTION_TYPES.DO_LOGIN,
    payload: false,
  });
  dispatch(ALERT_ACTIONS.error(message));
};
