import ALERT_TYPES from '../types/alert.type';

export const alertReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ALERT_TYPES.CLEAR:
      return {};
    case ALERT_TYPES.SUCCESS:
      return {
        type,
        msg: payload,
      };
    case ALERT_TYPES.ERROR:
      return {
        type,
        msg: payload,
      };
    case ALERT_TYPES.INFO:
      return {
        type,
        msg: payload,
      };
    default:
      return state;
  }
};
