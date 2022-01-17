import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import InputCheckbox from './InputCheckbox';
import InputSelect from './InputSelect';
import { OPTIONS_FILTER } from '../utils/constants';

export default class Filter extends Component {
  render() {
    const { nameFind, superTrunfoFind, rareFind, onChange } = this.props;

    return (
      <div className="filter">
        <h3>Filtro de busca</h3>

        <Input
          id="nameFind"
          type="text"
          placeholder="Nome da carta"
          dataTest="name-filter"
          value={ nameFind }
          disabled={ superTrunfoFind }
          onChange={ onChange }
        />

        <InputSelect
          id="rareFind"
          type="text"
          label="Raridade"
          dataTest="rare-filter"
          options={ OPTIONS_FILTER }
          value={ rareFind }
          disabled={ superTrunfoFind }
          onChange={ onChange }
        />

        <InputCheckbox
          type="checkbox"
          id="superTrunfoFind"
          label="Super Trunfo"
          dataTest="trunfo-filter"
          checked={ superTrunfoFind }
          onChange={ onChange }
        />
      </div>
    );
  }
}

Filter.propTypes = {
  nameFind: PropTypes.string,
  superTrunfoFind: PropTypes.bool,
  rareFind: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;
