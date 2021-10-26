import ALERT_TYPES from '../types/alert.type';

export const success = (msg) => {
  return {
    type: ALERT_TYPES.SUCCESS,
    payload: msg,
  };
};

export const error = (msg) => {
  return {
    type: ALERT_TYPES.ERROR,
    payload: msg,
  };
};

export const info = (msg) => {
  return {
    type: ALERT_TYPES.INFO,
    payload: msg,
  };
};

export const clear = () => {
  return {
    type: ALERT_TYPES.CLEAR,
  };
};
