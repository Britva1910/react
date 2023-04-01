import React from 'react';
import { booksData } from '../../../assets/mock-response';
import SearchBar from '../../search-bar/SearchBar';
import styles from './main-page.module.scss';

import Card from '../../card/Card';

export interface ICardData {
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

const MainPage: React.FC = () => {
  const listCards = booksData.map((item) => (
    <li key={item.ISBN}>
      <Card {...item} />
    </li>
  ));

  return (
    <div className={styles.container}>
      <SearchBar />
      <ul className={styles.wrapper}>{...listCards}</ul>
    </div>
  );
};

export default MainPage;
