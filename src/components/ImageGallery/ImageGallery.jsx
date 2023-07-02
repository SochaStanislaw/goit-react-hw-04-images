import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, getLargeImage }) => {
  return (
    <ul className='ImageGallery'>
      {images.map(img => {
        return (
          <ImageGalleryItem
            key={img.id}
            webformatURL={img.webformatURL}
            tags={img.tags}
            largeImageURL={img.largeImageURL}
            getLargeImage={getLargeImage}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
  getLargeImage: PropTypes.func,
};

export default ImageGallery;