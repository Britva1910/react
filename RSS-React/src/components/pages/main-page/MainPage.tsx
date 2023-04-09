import React, { useEffect, useState } from 'react';
import SearchBar from '../../search-bar/SearchBar';
import styles from './main-page.module.scss';
import { IImageData, IResponseSearchByWord } from '../../../shared/models';
import Card from '../../card/Card';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Loader } from '../../loader/Loader';
import axios from 'axios';
import DetailInformation from './components/detailInformation/DetailInformation';

const MainPage: React.FC = () => {
  const [searchData, setSearchData] = useState<IResponseSearchByWord>({
    results: [],
    total: null,
    total_pages: null,
  });
  const [modalWindowStatus, setModalWindowStatus] = useState(false);
  const [activeCardId, setActiveCardId] = useState<string>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {});

  const handleModalWindow = (id: string | undefined, status: boolean) => {
    setModalWindowStatus(status);
    if (id) {
      setActiveCardId(id);
    }
  };

  const getDataByInput = (userInput: string) => {
    setLoading(true);
    axios
      .get<IResponseSearchByWord>(
        `https://api.unsplash.com/search/photos?client_id=xJGDNkDt7wD9WsFgcHle9TXtWZKQRC7NLv6-rfAO8lY&query=${userInput}&orientation=landscape`
      )
      .then((response) => {
        setSearchData(response.data);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((e) => console.log(e));
  };

  const list = searchData.results.map((item) => (
    <Card cardData={item} key={item.id} handleModalWindow={handleModalWindow} />
  ));

  return (
    <>
      <div className={styles.container}>
        <SearchBar setUserInput={getDataByInput} />
        {!loading && <div className={styles.wrapper}>{...list}</div>}
      </div>
      {loading && (
        <div>
          <Loader />
        </div>
      )}
      {modalWindowStatus && (
        <>
          <DetailInformation
            handleModalWindow={handleModalWindow}
            currentPictureId={activeCardId}
          />
        </>
      )}
    </>
  );
};

export default MainPage;
