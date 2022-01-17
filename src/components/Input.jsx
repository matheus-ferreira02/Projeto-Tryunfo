import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const {
      type,
      label,
      id,
      dataTest,
      value,
      disabled,
      onChange,
      placeholder } = this.props;

    return (
      <label htmlFor={ id }>
        { label }
        <input
          type={ type }
          id={ id }
          data-testid={ dataTest }
          value={ value }
          disabled={ disabled }
          onChange={ onChange }
          placeholder={ placeholder }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  dataTest: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
}.isRequired;
