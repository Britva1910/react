import React, { useState } from 'react';
import SearchBar from '../../search-bar/SearchBar';
import styles from './main-page.module.scss';
import Card from '../../card/Card';
import { Loader } from '../../loader/Loader';
import DetailInformation from './components/detailInformation/DetailInformation';
import { imageAPI } from '../../../services/ImagesService';
import { useAppSelector } from '../../../store/reducers/redux';

const MainPage: React.FC = () => {
  const [modalWindowStatus, setModalWindowStatus] = useState(false);
  const [activeCardId, setActiveCardId] = useState<string>();
  const { userInput } = useAppSelector((state) => state.searchReducer);

  const handleModalWindow = (id: string | undefined, status: boolean) => {
    setModalWindowStatus(status);
    if (id) {
      setActiveCardId(id);
    }
  };

  const { data, error, isLoading } = imageAPI.useFetchImagesByWordQuery(userInput);

  const list = data?.results.map((item) => (
    <Card cardData={item} key={item.id} handleModalWindow={handleModalWindow} />
  ));

  return (
    <>
      <div className={styles.container}>
        <SearchBar />
        {list && <div className={styles.wrapper}>{...list}</div>}
      </div>
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      {error && <h1>Ooops .... the server doesn`t seem to want to response </h1>}
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
