import ACTION_TYPES from '../actions/types';
const initValue = {
  airports: [],
  tripTypes: [],
};

const searchFormDataReducer = (state = initValue, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_AIRPORTS:
      return { ...state, airports: action.payload };
    case ACTION_TYPES.GET_TRIP:
      return { ...state, tripTypes: action.payload };
    default:
      return state;
  }
};

export default searchFormDataReducer;
