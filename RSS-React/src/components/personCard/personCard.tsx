import React from 'react';
import styles from './personCard.module.scss';
import { IPersonCard } from '../../shared/models';

type PersonCardProps = {
  data: IPersonCard;
};

const PersonCard: React.FC<PersonCardProps> = (props: PersonCardProps) => {
  return (
    <div className={styles.wrapper}>
      <p>User</p>
      <div>
        <img src={props.data.file} alt="" />
      </div>
      <div>
        <span>User name: </span>
        <span>{props.data.firstName}</span>
      </div>
      <div>
        <span>User surname: </span>
        <span>{props.data.lastName}</span>
      </div>
      <div>
        <span>Date: </span>
        <span>{props.data.birthday}</span>
      </div>
      <div>
        <span>User country: </span>
        <span>{props.data.country}</span>
      </div>
      <div>
        <span>Consented data: </span>
        <span>{props.data.consent ? 'Yes' : 'No'}</span>
      </div>
      <div>
        <span>Promo notifications: </span>
        <span>{props.data.promo ? 'Yes' : 'No'}</span>
      </div>
    </div>
  );
};

export default PersonCard;
