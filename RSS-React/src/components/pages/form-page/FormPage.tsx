import React, { useState } from 'react';
import Form from '../../form/Form';
import PersonCard from '../../personCard/PersonCard';
import styles from './form-page.module.scss';
import { IPersonCard } from '../../../shared/models';
import ModalPage from '../../modalPage/ModalPage';

const FormPage: React.FC = () => {
  const [cards, setCards] = useState<IPersonCard[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const updateStateFormPage = (value: IPersonCard) => {
    const file = value.file?.[0];
    if (file) {
      const blob = new Blob([file], { type: 'application/pdf' });
      value.file = URL.createObjectURL(blob);
    }
    setCards([...cards, value]);
    setModalVisible(true);
  };

  const closeModalPage = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <Form updateData={updateStateFormPage} />
      <ul className={styles.card_list}>
        {cards.map((item, index) => (
          <li key={index}>
            <PersonCard data={item} />
          </li>
        ))}
      </ul>
      <ModalPage modalVisible={modalVisible} closePage={closeModalPage} />
    </div>
  );
};

export default FormPage;
