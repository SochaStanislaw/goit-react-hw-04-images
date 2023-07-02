import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  webformatURL,
  tags,
  largeImageURL,
  getLargeImage,
}) => (
  <li className='ImageGalleryItem'>
    <img
      src={webformatURL}
      alt={tags}
      className='ImageGalleryItem-image'
      onClick={() => getLargeImage(largeImageURL)}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  tags: PropTypes.string,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  getLargeImage: PropTypes.func,
};

export default ImageGalleryItem;