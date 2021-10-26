import ACTION_TYPES from './types';
import { ALERT_ACTIONS } from '@airx/fragments';
import {
  checkEmailExists,
  doSignup,
  doLogin,
  onLoginSuccess,
  onLoginFailure,
} from '../services/auth';

export const isEmailExistsAction = async (email) => {
  try {
    const { data } = await checkEmailExists(email);
    return {
      type: ACTION_TYPES.CHECK_EMAIL_EXISTS,
      payload: data.errors !== null,
    };
  } catch (error) {
    console.error(error);
    return {
      type: ACTION_TYPES.CHECK_EMAIL_EXISTS,
      payload: false,
    };
  }
};

export const doSignupAction = (payload) => async (dispatch) => {
  try {
    const { data } = await doSignup(payload);
    dispatch(ALERT_ACTIONS.success(data.data.message));
  } catch (e) {
    console.error(e);
  }
};

export const doLoginAction = (payload) => async (dispatch) => {
  try {
    const { data } = await doLogin(payload);
    if (!data.data) {
      onLoginFailure(dispatch, data.errors[0].message);
    } else {
      onLoginSuccess(dispatch, data.data);
    }
  } catch (error) {
    console.log(error);
    onLoginFailure(dispatch, error.message);
  }
};
