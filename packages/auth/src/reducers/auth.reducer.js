export const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case '':
      return { ...state };
    default:
      return false;
  }
};
