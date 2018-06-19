import { combineReducers } from 'redux';
import auth from './auth';
import doctors from './doctors';

const appReducers = combineReducers({
  auth,
  doctors,
});

const rootReducer = (state, action) => {
  return appReducers(state, action);
};

export default rootReducer;
