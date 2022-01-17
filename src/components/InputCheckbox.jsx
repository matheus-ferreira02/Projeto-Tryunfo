import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputCheckbox extends Component {
  render() {
    const { type, label, id, dataTest, checked, onChange } = this.props;

    return (
      <label htmlFor={ id }>
        <input
          className="checkbox"
          type={ type }
          id={ id }
          data-testid={ dataTest }
          checked={ checked }
          onChange={ onChange }
        />
        { label }
      </label>
    );
  }
}

InputCheckbox.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  dataTest: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}.isRequired;
