import ACTION_TYPES from '../actions/types';
const initialState = {
  isEmailExists: false,
  isLoggedin: false,
};
export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CHECK_EMAIL_EXISTS:
      return { ...state, isEmailExists: action.payload };
    case ACTION_TYPES.DO_LOGIN:
      return { ...state, isLoggedin: action.payload };
    default:
      return { ...state };
  }
};
