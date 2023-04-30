import React, { useState } from 'react';
import Form from '../../form/Form';
import PersonCard from '../../personCard/PersonCard';
import styles from './form-page.module.scss';
import { IPersonCard } from '../../../shared/models';
import ModalPage from '../../modalPage/ModalPage';
import { useAppDispatch, useAppSelector } from '../../../store/reducers/redux';
import { formSlice } from '../../../store/reducers/formData';

const FormPage: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { cardsData } = useAppSelector((state) => state.formReducer);
  const { setCardsData } = formSlice.actions;
  const dispatch = useAppDispatch();

  const updateStateFormPage = (value: IPersonCard) => {
    const file = value.file?.[0];
    if (file) {
      const blob = new Blob([file], { type: 'application/pdf' });
      value.file = URL.createObjectURL(blob);
    }
    dispatch(setCardsData(value));
    setModalVisible(true);
  };

  const closeModalPage = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <Form updateData={updateStateFormPage} />
      <ul className={styles.card_list}>
        {cardsData.map((item, index) => (
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
