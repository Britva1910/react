import React, { Component } from 'react';
import styles from './card.module.scss';

interface ICardData {
  title: string;
  author: string;
  publisher: string;
  year: number;
  ISBN: string;
  language: string;
  format: string;
  pages: number;
  category: string;
  imgURL: string;
}

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
