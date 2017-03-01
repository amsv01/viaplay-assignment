import React, {PropTypes} from 'react';
import MovieItem from './MovieItem';

const MovieList = (props) => {
  const movies = props.list._embedded["viaplay:products"];
  return (
    <div className="movie-list is-10 is-offset-1">
      <h2>{props.list.title}</h2>
      <div className="row">
        {movies.slice(0, props.list.styles[0] === 'portrait' ? 12 : 6).map((embed, index) =>
          <MovieItem key={index} 
                     movie={embed} 
                     type={props.list.styles[0]}
                     onItemClick={props.onClick}/>)}
      </div>
    </div>
  );
};


MovieList.propTypes = {
  list: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};


export default MovieList;