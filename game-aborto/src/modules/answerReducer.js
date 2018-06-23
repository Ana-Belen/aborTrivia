import * as constants from '../constants.js';
import * as score from '../actions/gameActions.js';

const initialState ={
    score: 0,
    wrongScore: 0
};


export default function answerReducer(state = initialState, action) {
    switch (action.type) {
      case constants.INCREASE_SCORE:
        return Object.assign({}, state, { score: state.score + action.value});
      case constants.WRONG_SCORE:
        return Object.assign({}, state, { wrongScore : state.wrongScore + action.value });
      default:
        return state;
    }
  }