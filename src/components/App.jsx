import React, { useState, useEffect, useCallback } from 'react';
// api:
import fetchImages from 'API/fetchImages';
// components:
import Button from './Button';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Modal from './Modal';
import Searchbar from './Searchbar';

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [largeImageURL, setlargeImageURL] = useState('');

  const getImages = useCallback(() => {
    setLoading(true);

    fetchImages(query, page)
      .then((fetchedImg) => {
        if (fetchedImg.hits.length) {
          setImages((prevImages) => [...prevImages, ...fetchedImg.hits]);
          setPage((prevPage) => prevPage + 1);
          setTotalPages(Math.round(fetchedImg.totalHits / 12));
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [query, page]);

  const getSearchFormSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const getLargeImage = (url) => {
    setlargeImageURL(url);
  };

  const closeModal = () => {
    setlargeImageURL('');
  };

  useEffect(() => {
    if (query) {
      getImages();
    }
  }, [query, getImages]);

  return (
    <div className="App">
      <Searchbar getSearchFormSubmit={getSearchFormSubmit} />

      <ImageGallery images={images} getLargeImage={getLargeImage} />

      {loading && <Loader />}

      {!loading && totalPages >= page && <Button getImages={getImages} />}

      {largeImageURL && (
        <Modal largeImageURL={largeImageURL} closeModal={closeModal} />
      )}
    </div>
  );
};

export default App;