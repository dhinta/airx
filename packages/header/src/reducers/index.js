import { combineReducers } from 'redux';
import searchReducer from './search';
import searchFormDataReducer from './search-form-data';

export default combineReducers({
  search: searchReducer,
  searchFormData: searchFormDataReducer,
});
