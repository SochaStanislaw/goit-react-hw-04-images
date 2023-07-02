// import React, { Component } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ largeImageURL, closeModal }) => {
  const handleKeyDown = (ev) => {
    if (ev.code === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='Overlay' onClick={closeModal}>
      <div className='Modal'>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string,
  closeModal: PropTypes.func,
};

export default Modal;

// export default class Modal extends Component {
//   static propTypes = {
//     largeImageURL: PropTypes.string,
//     closeModal: PropTypes.func,
//   };

//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = ev => {
//     if (ev.code === 'Escape') {
//       this.props.closeModal();
//     }
//   };

//   render() {
//     return (
//       <div className='Overlay' onClick={this.props.closeModal}>
//         <div className='Modal'>
//           <img src={this.props.largeImageURL} alt="" />
//         </div>
//       </div>
//     );
//   }
// }