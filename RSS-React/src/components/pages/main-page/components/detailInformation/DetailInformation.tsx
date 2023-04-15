import * as React from 'react';
import styles from './detailInformation.module.scss';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Loader } from '../../../../loader/Loader';
import { IImageData } from '../../../../../shared/models';
import { imageAPI } from '../../../../../services/ImagesService';

export interface IDetailInformationProps {
  handleModalWindow: (id: string | undefined, status: boolean) => void;
  currentPictureId: string;
}

function DetailInformation(props: IDetailInformationProps) {
  const [currentCardData, setCurrentCardData] = useState<IImageData>();
  const [loading, setLoading] = useState(true);

  const { data, isLoading } = imageAPI.useFetchImageByIDQuery(props.currentPictureId);

  /* useEffect(() => {
    axios
      .get<IImageData>(
        `https://api.unsplash.com/photos/${props.currentPictureId}?client_id=xJGDNkDt7wD9WsFgcHle9TXtWZKQRC7NLv6-rfAO8lY`
      )
      .then((response) => {
        setCurrentCardData(response.data);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((e) => console.log(e));
  }, [props.currentPictureId]); */

  const tagsList = currentCardData?.tags_preview.map((item, index) => (
    <li key={index.toString()}>{item.title}</li>
  ));

  return (
    <>
      <div
        className={styles.modal__bg}
        onClick={() => props.handleModalWindow(undefined, false)}
      ></div>
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      {!isLoading && (
        <div className={styles.modal}>
          <div className={styles.modal__body}>
            <span className={styles.btn__close}>
              <FontAwesomeIcon
                icon={faTimes}
                size="lg"
                onClick={() => props.handleModalWindow(undefined, false)}
              />
            </span>
            <img src={data?.urls.regular} alt="image" />
            <div className={styles.modal__information}>
              <div>{data?.alt_description}</div>
              <div>{`Views: ${data?.views}`}</div>
              <div>{`Likes: ${data?.likes}`}</div>
              <div>{`Publication date: ${data?.promoted_at}`}</div>
              <div>{`Author: ${data?.user.name}`}</div>
              <ul className={styles.modal__tags}>Tags: {tagsList}</ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailInformation;
