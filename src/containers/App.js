import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Loading from '../components/Utils/Loading';

export const App = (props) => {
  const {isFetched, children} = props;
  return (
    <div>
      {!isFetched &&
      <section className="hero is-warning is-bold is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h2 className="subtitle">
              Please wait to load movie
              <Loading />
            </h2>
          </div>
        </div>
      </section>}
      {children}
    </div>
  );
};


App.propTypes = {
  isFetched: PropTypes.bool.isRequired,
  children: PropTypes.object
};

const mapStateToProps = state => {
  return {
    isFetched: state.movieReducer.length > 0
  };
};

export default connect(
  mapStateToProps
)(App);
