import React from 'react';
import styles from './card.module.scss';
import { IImageData } from '../../shared/models';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type CardProps = {
  cardData: IImageData;
  key: string;
  handleModalWindow: (id: string | undefined, status: boolean) => void;
};

const Card: React.FC<CardProps> = ({ cardData, handleModalWindow }) => {
  return (
    <div className={styles.wrapper} onClick={() => handleModalWindow(cardData.id, true)}>
      <img src={cardData.urls.small} alt="card_image" />
      <div>{cardData.promoted_at}</div>
      <div>{cardData.alt_description}</div>
      <div>{cardData.user.name}</div>
      <div>
        <FontAwesomeIcon icon={faHeart} />
        <span>{cardData.likes}</span>
      </div>
    </div>
  );
};

export default Card;
