import * as constants  from '../constants.js';

export function increaseScore(value){
    return dispatch => {
        dispatch({ type: constants.INCREASE_SCORE, value });
    }
}