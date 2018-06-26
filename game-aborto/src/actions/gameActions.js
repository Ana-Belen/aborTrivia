import * as constants from "../constants.js";

export function increaseScore(value) {
  return dispatch => {
    dispatch({ type: constants.INCREASE_SCORE, value });
  };
}

export function wrongScore(value) {
  return dispatch => {
    dispatch({ type: constants.WRONG_SCORE, value });
  };
}

export function reflectResult(value) {
    console.log('in action', value);
  return dispatch => {
    dispatch({ type: constants.REFLECT_RESULT, value });
  };
}
