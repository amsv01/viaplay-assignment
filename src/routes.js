import React from 'react';
import { Route } from 'react-router';

import App from './containers/App';
import Movie from './containers/Movie';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <Route path="movie/:id" component={Movie} />
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
