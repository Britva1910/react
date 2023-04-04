import React, { useEffect, useState } from 'react';
import { booksData } from '../../../assets/mock-response';
import SearchBar from '../../search-bar/SearchBar';
import styles from './main-page.module.scss';

import { IImageData, IResponseSearchByWord } from '../../../shared/models';

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
  const [searchData, setSearchData] = useState<IResponseSearchByWord>({
    results: [],
    total: null,
    total_pages: null,
  });

  useEffect(() => {
    console.log(searchData);
  });

  const list = searchData.results.map((item) => <img key={item.id} src={item.urls.small} />);

  return (
    <div className={styles.container}>
      <SearchBar setResponse={setSearchData} />
      <div>{list.length > 0 ? list : 'Please use search!'}</div>
    </div>
  );
};

export default MainPage;
