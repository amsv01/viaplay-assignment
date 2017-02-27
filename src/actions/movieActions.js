import * as types from './actionTypes';
import {getMovie} from '../api/movieApi';

export function loadMovieSuccess(movie){
  return {type: types.LOAD_MOVIE_SUCCESS, movie};
}

export function loadMovie(){
  return dispatch => {
    return getMovie().then(movie => {
      console.log(movie);
      dispatch(loadMovieSuccess(movie));
    }).catch(stories => {
      console.log(stories);
    });
  };
}