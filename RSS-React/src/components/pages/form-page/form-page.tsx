import React from 'react';
import Form from '../../form/form';
import PersonCard from '../../personCard/personCard';
import styles from './form-page.module.scss';
import { IPersonCard } from '../../../shared/models';

type FormPageState = {
  cards: IPersonCard[];
};

export default class FormPage extends React.Component<Record<string, never>, FormPageState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { cards: [] };
    this.updateStateFormPage = this.updateStateFormPage.bind(this);
  }

  updateStateFormPage(value: IPersonCard) {
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
