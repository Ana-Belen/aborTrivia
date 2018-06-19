import * as constants from '../constants.js';
import * as score from '../actions/gameActions.js';

const initialState ={
    score: 0
};


export default function answerReducer(state = initialState, action) {
    switch (action.type) {
      case constants.INCREASE_SCORE:
        return Object.assign({}, state, { score: state.score + action.value});
      default:
        return state;
    }
  }