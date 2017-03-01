import * as types from '../actions/actionTypes';
import initialState from '../constants/initialState';

export default function movieReducer(state = initialState.movies, action){
  switch (action.type){
    case types.LOAD_MOVIE_SUCCESS:
      return [action.movie];
    default:
      return state;
  }
}