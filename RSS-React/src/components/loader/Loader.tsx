import React from 'react';
import styles from './loader.module.scss';

export const Loader: React.FC = () => {
  return (
    <div role="alert" className={styles.loader_container}>
      <div role="status" className={styles.spinner}></div>
    </div>
  );
};
