import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputSelect extends Component {
  render() {
    const { label, options, id, dataTest, value, disabled, onChange } = this.props;

    return (
      <label htmlFor={ id }>
        { label }
        <select
          id={ id }
          data-testid={ dataTest }
          value={ value }
          disabled={ disabled }
          onChange={ onChange }
        >
          {options.map((option) => (
            <option key={ option } value={ option }>{ option }</option>
          ))}
        </select>
      </label>
    );
  }
}

InputSelect.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string,
  dataTest: PropTypes.string,
  disabled: PropTypes.bool,
}.isRequired;
