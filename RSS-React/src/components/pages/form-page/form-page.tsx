import React from 'react';
import Form from '../../form/form';
import PersonCard from '../../personCard/personCard';
import styles from './form-page.module.scss';

interface IFormState {
  cards: ICard[];
}

export default class FormPage extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = { cards: [] };
    this.updateStateFormPage = this.updateStateFormPage.bind(this);
  }

  updateStateFormPage(value) {
    this.setState((prevState) => ({
      cards: [...prevState.cards, value],
    }));
  }

  render() {
    return (
      <div>
        <Form updateData={this.updateStateFormPage} />
        <ul className={styles.card_list}>
          {this.state.cards.map((item, index) => (
            <li key={index}>
              <PersonCard data={item} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
