import React, {PropTypes} from 'react';

const MovieDetails = (props) => {
  const movie = props.movie._embedded["viaplay:product"];
  
  return (
    <div className="details-wp">
      <div className="cover-wp visible-lg">
        <span className="image-wp">
          <img src={movie.content.images.landscape.url} alt={movie.content.title} />
        </span>
      </div>
      <div className="container">  
        <div className="tile is-ancestor">
          <div className="tile is-vertical">
            <div className="tile">
              <div className="tile is-parent is-2 col-xs-12">
                <article className="tile is-child">
                  <figure className="image movie-box-image">
                    <img src={movie.content.images.boxart.url} alt={movie.content.title} />
                  </figure>
                </article>
              </div>
              <div className="tile is-parent is-10-desktop col-xs-12 is-vertical movie-title-wp">
                <div className="hero-body">
                <article className="tile is-child">
                  <h1 className="movie-title title is-1" style={{fontWeight: 'bold', textTransform: 'uppercase'}}>{movie.content.title}</h1>
                  <p className="movie-details">
                    <span className="genre-wp">
                    {movie._links['viaplay:genres'].map((genre, index) => {
                      return <a key={index} to={genre.href}>{genre.title}</a>;
                    })}
                    </span>
                    <span>
                    {movie.content.duration.readable}  
                    </span>
                    <span>
                    {movie.content.production.year}  
                    </span>
                    
                  </p>
                  <p className="more-about-movie">{movie.content.synopsis}</p>
                </article>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};


MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired
};


export default MovieDetails;