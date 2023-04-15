import React, { useEffect, useState } from 'react';
import SearchBar from '../../search-bar/SearchBar';
import styles from './main-page.module.scss';
import { IResponseSearchByWord } from '../../../shared/models';
import Card from '../../card/Card';
import { Loader } from '../../loader/Loader';
import DetailInformation from './components/detailInformation/DetailInformation';
import { imageAPI } from '../../../services/ImagesService';

const MainPage: React.FC = () => {
  const [modalWindowStatus, setModalWindowStatus] = useState(false);
  const [activeCardId, setActiveCardId] = useState<string>();
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {});

  const handleModalWindow = (id: string | undefined, status: boolean) => {
    setModalWindowStatus(status);
    if (id) {
      setActiveCardId(id);
    }
  };

  const { data, error, isLoading } = imageAPI.useFetchImagesByWordQuery(inputValue);

  const getDataByInput = (userInput: string) => {
    setInputValue(userInput);
  };

  const list = data?.results.map((item) => (
    <Card cardData={item} key={item.id} handleModalWindow={handleModalWindow} />
  ));

  return (
    <>
      <div className={styles.container}>
        <SearchBar setUserInput={getDataByInput} />
        {list && <div className={styles.wrapper}>{...list}</div>}
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
            currentPictureId={activeCardId ? activeCardId : ''}
          />
        </>
      )}
    </>
  );
};

export default MainPage;
