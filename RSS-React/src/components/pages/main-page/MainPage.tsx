import React, { useEffect, useState } from 'react';
import { booksData } from '../../../assets/mock-response';
import SearchBar from '../../search-bar/SearchBar';
import styles from './main-page.module.scss';

import { IResponseSearchByWord } from '../../../shared/models';
import Card from '../../card/Card';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainPage: React.FC = () => {
  const [searchData, setSearchData] = useState<IResponseSearchByWord>({
    results: [],
    total: null,
    total_pages: null,
  });
  const [modalWindowStatus, setModalWindowStatus] = useState(false);

  useEffect(() => {});

  const handleModalWindow = (id: string | undefined, status: boolean) => {
    setModalWindowStatus(status);
  };

  const list = searchData.results.map((item) => (
    <Card cardData={item} key={item.id} handleModalWindow={handleModalWindow} />
  ));

  return (
    <>
      <div className={styles.container}>
        <SearchBar setResponse={setSearchData} />
        <div className={styles.wrapper}>{...list}</div>
      </div>
      {modalWindowStatus && (
        <>
          <div
            className={styles.modal__bg}
            onClick={() => handleModalWindow(undefined, false)}
          ></div>
          <div>
            <div className={styles.modal__body}>Modal page</div>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </>
      )}
    </>
  );
};

export default MainPage;
