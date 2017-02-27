import * as types from '../actions/actionTypes';

export default function movieReducer(state = [], action){
  switch (action.type){
    case types.LOAD_MOVIE_SUCCESS:
      return action.movie;
    default:
      return state;
  }
}