import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import answerReducer from './answerReducer.js';

const rootReducer = combineReducers({
  routing: routerReducer,
  answerReducer
});

export default rootReducer;