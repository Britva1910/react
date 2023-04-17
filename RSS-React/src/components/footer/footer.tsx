import React from 'react';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer role="wrapper" className={styles.wrapper}>
      <div className={styles.content}></div>
    </footer>
  );
};

export default Footer;
