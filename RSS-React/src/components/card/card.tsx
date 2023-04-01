import React from 'react';
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

const Card = (props: ICardData) => {
  const { author, title, imgURL, year, language, pages } = props;

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
};

export default Card;
