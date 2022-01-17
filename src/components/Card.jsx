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
      btnRemove,
      removeButton,
    } = this.props;

    return (
      <section className="card">
        <h1 data-testid="name-card">{ cardName }</h1>

        <img data-testid="image-card" src={ cardImage } alt={ cardName } />

        <p className="desc" data-testid="description-card">{ cardDescription }</p>

        <div className="div-white">
          <ul className="attr-text">
            <li>
              Attr01
              <span data-testid="attr1-card">{ cardAttr1 }</span>
            </li>

            <li>
              Attr02
              <span data-testid="attr2-card">{ cardAttr2 }</span>
            </li>

            <li>
              Attr02
              <span data-testid="attr3-card">{ cardAttr3 }</span>
            </li>
          </ul>

          <p className="rare" data-testid="rare-card">{`Raridade: ${cardRare}`}</p>

          { cardTrunfo && (
            <p
              className="super-trunfo"
              data-testid="trunfo-card"
            >
              Super Trunfo
            </p>) }
        </div>

        { btnRemove && (
          <button
            type="button"
            onClick={ removeButton }
            name={ cardName }
            data-testid="delete-button"
          >
            Excluir
          </button>) }
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
