import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './Searcher.css';
import Button from './../Button/Button';

export default class Searcher extends Component {
  constructor (...args) {
    super(...args);
    this.state = {
      textToSearch: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({textToSearch: event.currentTarget.value}, () => {
      console.log('Texto con el nuevo estado: ', this.state.textToSearch);
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.onSubmit(this.state.textToSearch);
  }

  render () {
    return (
      <form className='Searcher' onSubmit={this.handleSubmit}>
        <input
          disabled={this.props.isLoading}
          onChange={this.handleChange}
          placeholder='Find a Character'
          type='text' />
        <Button
          isLoading={this.props.isLoading}
          label='Search' />
      </form>
    );
  }
}

Searcher.propTypes = {
  onSubmit: PropTypes.func
};

Searcher.defaultProps = {
  onSubmit: () => { console.log('Esto es lo que se ejecuta por defecto si no se le pasan props. '); }
};
