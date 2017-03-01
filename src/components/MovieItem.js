import React, {PropTypes} from 'react';

class MovieItem extends React.Component{
  constructor(props, context){
    super(props, context);
    
    this._onClick = this._onClick.bind(this);
  }

  _onClick(){
    this.props.onItemClick(this.props.movie._links["viaplay:page"].href);
  }

  render(){
    const movie = this.props.movie;
    const data = {
      title: movie.content.title ? movie.content.title : movie.content.series.title,
      imageUrl: this.props.type === 'portrait' ? movie.content.images.boxart.url : movie.content.images.landscape.url
    };
    
    return (
      <div className="movie column" onClick={this._onClick}>
        <img src={data.imageUrl} alt={data.title} />
      </div>
    );  
  }
  
}


MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired
};


export default MovieItem;