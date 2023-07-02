import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  static propTypes = {
    largeImageURL: PropTypes.string,
    closeModal: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = ev => {
    if (ev.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className='Overlay' onClick={this.props.closeModal}>
        <div className='Modal'>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}