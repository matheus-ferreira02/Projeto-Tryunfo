import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';
import Filter from './components/Filter';
import { MAX_ATTRIBUTE } from './utils/constants';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardsSaves: [],
      nameFind: '',
      rareFind: 'todas',
      superTrunfoFind: false,
    };
  }

  validationButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const attr1Validation = cardAttr1 >= 0 && cardAttr1 <= MAX_ATTRIBUTE;
    const attr2Validation = cardAttr2 >= 0 && cardAttr2 <= MAX_ATTRIBUTE;
    const attr3Validation = cardAttr3 >= 0 && cardAttr3 <= MAX_ATTRIBUTE;

    const totalAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const attrsLimit = 210;
    const validationAllAttr = totalAttr <= attrsLimit;

    const errorCases = [
      !cardName.length,
      !cardDescription.length,
      !attr1Validation,
      !attr2Validation,
      !attr3Validation,
      !validationAllAttr,
      !cardImage.length,
    ];

    const filledForm = errorCases.every((error) => error !== true);
    this.setState({ isSaveButtonDisabled: !filledForm });
  }

  inputChange = ({ target }) => {
    const { id } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [id]: value,
    }, this.validationButton);
  }

  hasTrunfo = (trunfo) => {
    this.setState({
      hasTrunfo: trunfo,
    });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();

    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.state;

    if (cardTrunfo) this.hasTrunfo(cardTrunfo);

    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cardsSaves: [
        ...prevState.cardsSaves,
        {
          cardName,
          cardImage,
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardRare,
          cardTrunfo,
        }],
    }));
  }

  removeButton = ({ target }) => {
    const { cardsSaves } = this.state;
    const { name } = target;

    const hasTrunfo = cardsSaves.find((card) => card.cardName === name).cardTrunfo;

    const newArray = cardsSaves.filter((card) => card.cardName !== name);
    this.setState({
      cardsSaves: newArray,
    });

    if (hasTrunfo) {
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  findInput = ({ target }) => {
    const { id } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [id]: value,
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      cardsSaves,
      nameFind,
      rareFind,
      superTrunfoFind,
    } = this.state;

    let findCard = nameFind.length
      ? cardsSaves.filter((card) => card.cardName.includes(nameFind))
      : cardsSaves;

    findCard = rareFind !== 'todas'
      ? findCard.filter((card) => card.cardRare === rareFind)
      : findCard;

    findCard = superTrunfoFind
      ? cardsSaves.filter((card) => card.cardTrunfo)
      : findCard;

    return (
      <div>
        <section className="new_card">
          <div className="add_new_card">
            <h1>Adicionar nova carta</h1>
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardImage={ cardImage }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.inputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>

          <div className="preview">
            <h1>Pré-visualização</h1>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardImage={ cardImage }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </section>

        <div className="filter_cards">
          <div className="all-cards">
            <h1>Todas as cartas</h1>

            <Filter
              nameFind={ nameFind }
              superTrunfoFind={ superTrunfoFind }
              rareFind={ rareFind }
              onChange={ this.findInput }
            />
          </div>

          <div className="cards">
            { findCard.map((card) => (
              <Card
                key={ card.cardName }
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardImage={ card.cardImage }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
                removeButton={ this.removeButton }
                btnRemove={ findCard.length !== 0 }
              />
            )) }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
