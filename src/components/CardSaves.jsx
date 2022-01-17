import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
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
      removeButton,
    } = this.props;

    return (
      <section className="card">
        <h1 data-testid="name-card">{ cardName }</h1>

        <img data-testid="image-card" src={ cardImage } alt={ cardName } />

        <p data-testid="description-card">{ cardDescription }</p>

        <ul>
          <li data-testid="attr1-card">{ cardAttr1 }</li>
          <li data-testid="attr2-card">{ cardAttr2 }</li>
          <li data-testid="attr3-card">{ cardAttr3 }</li>
        </ul>

        <p data-testid="rare-card">{ cardRare }</p>

        { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }

        <button
          type="button"
          name={ cardName }
          data-testid="delete-button"
          onClick={ removeButton }
        >
          Excluir
        </button>
      </section>
    );
  }
}

Card.propTypes = {
  CardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;
