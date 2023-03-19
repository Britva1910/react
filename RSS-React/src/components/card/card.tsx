import React, { Component } from 'react';
import { ICardData } from 'components/pages/main-page/main-page';
import styles from './card.module.scss';

export default class Card extends Component<ICardData> {
  render() {
    const { author, title, imgURL, year, language, pages } = this.props;

    return (
      <div className={styles.wrapper}>
        <div>
          <img src={imgURL} alt="img book" />
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.information_section}>
          <span className={styles.author}>{author}</span>
          <span>{year}</span>
          <span>{language}</span>
          <span>{pages}</span>
        </div>
      </div>
    );
  }
}
