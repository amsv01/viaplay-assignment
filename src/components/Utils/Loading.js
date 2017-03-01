import React from 'react';
import loadingSVG from '../../images/loading.svg';

const Loading = props => {
  return (
    <div {...props}>
      <img src={loadingSVG} alt="Ajax Indicator" />
    </div>
  );
};

export default Loading;