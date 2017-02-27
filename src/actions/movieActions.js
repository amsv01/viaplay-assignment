import * as types from './actionTypes';
import {getMovie} from '../api/movieApi';

export function loadMovieSuccess(movie){
  return {type: types.LOAD_MOVIE_SUCCESS, movie};
}

export function loadMovie(){
  return dispatch => {
    return getMovie().then(movie => {
      dispatch(loadMovieSuccess(movie));
    }).catch(err => {
      console.log(err);
    });
  };
}