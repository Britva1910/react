import React from 'react';
import Form from '../../form/Form';
import PersonCard from '../../personCard/PersonCard';
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
    const file = value.file?.[0];
    if (file) {
      const blob = new Blob([file], { type: 'application/pdf' });
      value.file = URL.createObjectURL(blob);
    }
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
