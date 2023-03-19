import React from 'react';
import { booksData } from '../../../assets/mock-response';
import SearchBar from '../../search-bar/search-bar';
import styles from './main-page.module.scss';

import Card from '../../card/card';

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

export default class MainPage extends React.Component {
  listCards = booksData.map((item) => (
    <li key={item.ISBN}>
      <Card {...item} />
    </li>
  ));

  render() {
    return (
      <div>
        <SearchBar />
        <ul className={styles.wrapper}>{...this.listCards}</ul>
      </div>
    );
  }
}
