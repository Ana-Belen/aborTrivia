import * as constants  from '../constants.js';

export function increaseScore(value){
    return { type: constants.CURRENT_SCORE, value };
}