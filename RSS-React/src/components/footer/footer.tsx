import React from 'react';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.content}>
        <ul>
          <li>
            <a href="http://" className={styles.gh_icon}></a>
          </li>
          <li>
            <a href="http://" className={styles.rss_icon}></a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
