import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ getImages }) => (
  <button className='Button' type="button" onClick={getImages}>
    show more images
  </button>
);

Button.propTypes = {
  getImages: PropTypes.func,
};

export default Button;