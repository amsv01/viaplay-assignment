import fetch from 'isomorphic-fetch';

export function getMovie(){
  return fetch('https://content.viaplay.se/pc-se/film/titanic-1997');
}