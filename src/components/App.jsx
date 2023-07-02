import React, { Component } from 'react';
// api:
import fetchImages from 'API/fetchImages';
// components:
import Button from './Button';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Modal from './Modal';
import Searchbar from './Searchbar';

export default class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    loading: false,
    // error: null,
    totalPages: 0,
    // moreItems: true,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;

    if (prevQuery !== nextQuery) {
      this.getImages();
    }
  }

  getImages = () => {
    const { query, page } = this.state;

    this.setState({ loading: true });

    fetchImages(query, page)
      .then(fetchedImg => {
        if (fetchedImg.hits.length) {
          this.setState(prevState => ({
            images: [...prevState.images, ...fetchedImg.hits],
            page: prevState.page + 1,
            totalPages: Math.round(fetchedImg.totalHits / 12),
          }));
        } 
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  getSearchFormSubmit = query => {
    this.setState({
      query: query,
      page: 1,
      images: [],
      error: null,
      moreItems: true,
    });
  };

  getLargeImage = url => {
    this.setState({
      largeImageURL: url,
    });
  };

  closeModal = () => {
    this.setState({ largeImageURL: '' });
  };

  render() {
    const {
      images,
      loading,
      page,
      totalPages,
      largeImageURL,
    } = this.state;

    return (
      <div className='App'>
        <Searchbar getSearchFormSubmit={this.getSearchFormSubmit} />

        <ImageGallery images={images} getLargeImage={this.getLargeImage} />
        
        {loading && <Loader />}
        
        {!loading && totalPages >= page && (
          <Button getImages={this.getImages} />
        )}
        
        {largeImageURL && (
          <Modal largeImageURL={largeImageURL} closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}