import React from 'react';
import Form from '../../form/form';

interface IFormState {
  cards: ICard[];
}

interface ICard {
  name: string;
  lastName: string;
  dateOfBirth: string;
  countries: string;
  avatarURL: string;
}

export default class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [] };
    this.updateStateFormPage = this.updateStateFormPage.bind(this);
  }

  updateStateFormPage(value: ICard) {
    console.log(value);
    this.setState((prevState: IFormState) => ({
      cards: [...prevState.cards, value],
    }));
    console.log(this.state.cards);
  }

  render() {
    return (
      <div>
        {this.state.cards.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
        <Form updateData={this.updateStateFormPage} />
      </div>
    );
  }
}
