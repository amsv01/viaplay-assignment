import fetch from 'isomorphic-fetch';

export const get = (url, resType = 'json') => {
  return fetch(url).then(response => {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    if(resType === 'json'){
      return response.json();
    }
    return response;
  });
};