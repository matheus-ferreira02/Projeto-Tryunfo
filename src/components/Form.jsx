import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import InputSelect from './InputSelect';
import TextArea from './TextArea';
import InputCheckbox from './InputCheckbox';
import { MAX_ATTRIBUTE, OPTIONS, TEXT_VALIDATION, MAX_ALL_ATR } from '../utils/constants';

export default class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const remainingPts = MAX_ALL_ATR
    - (Number(cardAttr1)
    + Number(cardAttr2)
    + Number(cardAttr3));

    return (
      <form className="formCard" onSubmit={ onSaveButtonClick }>
        <Input
          type="text"
          label="Nome"
          placeholder="Digite o nome da carta"
          id="cardName"
          dataTest="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />

        <TextArea
          label="Descrição"
          placeholder="Digite a descrição da carta"
          id="cardDescription"
          dataTest="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
        />

        <Input
          type="number"
          label="Atributo 1"
          placeholder="Pontos de atributo"
          id="cardAttr1"
          dataTest="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />

        { (cardAttr1 > MAX_ATTRIBUTE || cardAttr1 < 0) && (
          <span className="validation">
            { TEXT_VALIDATION }
          </span>) }

        <Input
          type="number"
          label="Atributo 2"
          placeholder="Pontos de atributo"
          id="cardAttr2"
          dataTest="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />

        { (cardAttr2 > MAX_ATTRIBUTE || cardAttr2 < 0) && (
          <span className="validation">
            { TEXT_VALIDATION }
          </span>) }

        <Input
          type="number"
          label="Atributo 3"
          placeholder="Pontos de atributo"
          id="cardAttr3"
          dataTest="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />

        { (cardAttr3 > MAX_ATTRIBUTE || cardAttr3 < 0) && (
          <span className="validation">
            { TEXT_VALIDATION }
          </span>) }

        <span className="remaining_pts">
          Pontos Restantes:
          { remainingPts < 0
            ? 0
            : remainingPts }
        </span>

        <div className="input_image">
          <i className="fas fa-link" />
          <Input
            icon="fas fa-link"
            type="text"
            label="Imagem"
            placeholder="URL da imagem"
            id="cardImage"
            dataTest="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </div>

        <InputSelect
          label="Raridade"
          options={ OPTIONS }
          id="cardRare"
          dataTest="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        />

        { hasTrunfo
          ? (
            <span className="text_validation">
              Você já tem um Super Trunfo em seu baralho
            </span>)
          : (
            <InputCheckbox
              type="checkbox"
              label="Super Trunfo"
              id="cardTrunfo"
              dataTest="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />) }

        <button
          className="submit_btn"
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;
