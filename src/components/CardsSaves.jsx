import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardsSaves extends Component {
  render() {
    const { cards } = this.props;

    return (
      <section>
        <ul>
          { cards.map((card) => (
            <li key={ card.cardName }>
              <p>{ card.cardName }</p>
              <p>{ card.cardImage }</p>
              <p>{ card.cardDescription }</p>
              <p>{ card.cardAttr1 }</p>
              <p>{ card.cardAttr2 }</p>
              <p>{ card.cardAttr3 }</p>
              <p>{ card.cardRare }</p>
              { card.cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
            </li>
          )) }
        </ul>
      </section>
    );
  }
}

CardsSaves.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string,
    cardImage: PropTypes.string,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardRare: PropTypes.string,
    cardTrunfo: PropTypes.bool,
  })).isRequired,
};
