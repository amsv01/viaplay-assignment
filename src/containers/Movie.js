import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadMovie} from '../actions/movieActions';
import MovieDetails from '../components/MovieDetails';
import MovieList from '../components/MovieList';

export class Movie extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onMovieClicked = this.onMovieClicked.bind(this);
  }
  
  onMovieClicked(url){
    // TODO: Caching should be added
    this.props.actions.loadMovie(url);
  }
  
  render() {
    return (
      <div>
        {this.props.movies.length > 0 &&
        <section className="hero is-warning is-fullheight">
          {
            this.props.movies.map((embed, index) => {
              if(embed.type === 'product'){
                return <MovieDetails movie={embed} key={index} />;
              } else if(embed.type === 'list'){
                return <MovieList list={embed} key={index} onClick={this.onMovieClicked} />;
              }
            })
          }
        </section>}  
      </div>
      
    );
  }
}

Movie.propTypes = {
  movies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

Movie.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state){
  let embededs = [];
  if(state.movieReducer.length > 0){
    embededs = state.movieReducer[0]._embedded['viaplay:blocks'];
  }
  return {
    movies: embededs
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({loadMovie}, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
