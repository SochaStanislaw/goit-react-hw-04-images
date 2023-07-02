import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  static propTypes = {
    getSearchFormSubmit: PropTypes.func.isRequired,
  };

  state = {
    inputValue: '',
  };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.getSearchFormSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className='Searchbar'>
        <form className='SearchForm' onSubmit={this.handleSubmit}>
          <button type="submit" className='SearchForm-button'>
            <span className='SearchForm-button-label'>Search</span>
          </button>

          <input
            className='SearchForm-input'
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}