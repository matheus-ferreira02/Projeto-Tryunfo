import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MAX_LENGTH_TEXTAREA } from '../utils/constants';

export default class TextArea extends Component {
  render() {
    const { label, id, dataTest, value, onChange, placeholder } = this.props;

    return (
      <label htmlFor={ id }>
        { label }
        <textarea
          id={ id }
          data-testid={ dataTest }
          value={ value }
          onChange={ onChange }
          placeholder={ placeholder }
          maxLength={ MAX_LENGTH_TEXTAREA }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  dataTest: PropTypes.string,
  placeholder: PropTypes.string,
}.isRequired;
