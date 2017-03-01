import * as types from './actionTypes';
import {get} from '../api/api';
import { browserHistory } from 'react-router';

export function loadMovieSuccess(movie){
  return {type: types.LOAD_MOVIE_SUCCESS, movie};
}

export function loadMovie(url){
  return dispatch => {
    return get(url).then(movie => {
      const moviePublicPath = movie._embedded['viaplay:blocks'][0]._embedded[`viaplay:${movie.pageType}`].publicPath;
      browserHistory.push(`/movie/${moviePublicPath}`);
      dispatch(loadMovieSuccess(movie));
    }).catch(stories => {
      //TODO: Should handle errors
      throw stories;
    });
  };
}