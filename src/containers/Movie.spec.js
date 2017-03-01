import React from 'react';
import {shallow} from 'enzyme';
import {Movie} from './Movie';
import MovieDetails from '../components/MovieDetails';

describe('<Movie />', () => {
  it('should contain <MovieDetails />', () => {
    const actions = {
      loadMovie: () => { }
    };
    
    const movies = [{
      type: 'product'
    }];
    
    const store = [];
    const wrapper = shallow(<Movie actions={actions} movies={movies} store={store} />);

    expect(wrapper.find(MovieDetails).length).toEqual(1);
  });
});
