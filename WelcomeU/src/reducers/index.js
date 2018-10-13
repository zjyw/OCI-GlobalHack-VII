import { combineReducers } from 'redux';
import userProfile from './userProfile';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  userProfile,
  form: reduxFormReducer
});
