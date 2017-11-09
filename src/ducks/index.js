import { combineReducers } from 'redux-immutable';
import meals from './meals';

const reducers = combineReducers({
  meals
});

export default reducers;
