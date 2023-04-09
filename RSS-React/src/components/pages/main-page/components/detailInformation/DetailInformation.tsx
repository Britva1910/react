import * as React from 'react';
import styles from './detailInformation.module.scss';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader } from '../../../../loader/Loader';
import { IImageData, IResponseSearchByWord } from '../../../../../shared/models';

export interface IDetailInformationProps {
  handleModalWindow: (id: string | undefined, status: boolean) => void;
  currentPictureId: string | undefined;
}

function DetailInformation(props: IDetailInformationProps) {
  const [currentCardData, setCurrentCardData] = useState<IImageData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<IResponseSearchByWord>(
        `https://api.unsplash.com/photos/${props.currentPictureId}?client_id=xJGDNkDt7wD9WsFgcHle9TXtWZKQRC7NLv6-rfAO8lY`
      )
      .then((response) => {
        setCurrentCardData(response.data);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((e) => console.log(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react/jsx-key
  const tagsList = currentCardData?.tags_preview.map((item, index) => (
    <li key={index.toString()}>{item.title}</li>
  ));

  return (
    <>
      <div
        className={styles.modal__bg}
        onClick={() => props.handleModalWindow(undefined, false)}
      ></div>
      {loading && (
        <div>
          <Loader />
        </div>
      )}
      {!loading && (
        <div className={styles.modal}>
          <div className={styles.modal__body}>
            <span className={styles.btn__close}>
              <FontAwesomeIcon
                icon={faTimes}
                size="lg"
                onClick={() => props.handleModalWindow(undefined, false)}
              />
            </span>
            <img src={currentCardData?.urls.regular} alt="image" />
            <div className={styles.modal__information}>
              <div>{currentCardData?.alt_description}</div>
              <div>{`Views: ${currentCardData?.views}`}</div>
              <div>{`Likes: ${currentCardData?.likes}`}</div>
              <div>{`Publication date: ${currentCardData?.promoted_at}`}</div>
              <div>{`Author: ${currentCardData?.user.name}`}</div>
              <ul className={styles.modal__tags}>Tags: {tagsList}</ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailInformation;
