import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './header.module.scss';

const Header: React.FC = () => {
  const location = useLocation();

  const getCurrentPageName = (currentURL: string): string => {
    switch (currentURL) {
      case '/':
        return 'Main page';
        break;
      case '/about-us':
        return 'About us page';
        break;

      case '/form':
        return 'Form';
        break;

      default:
        return 'Ooops...';
        break;
    }
  };

  return (
    <header className={styles.wrapper}>
      <nav className={styles.navigation}>
        <ul className={styles.menu}>
          <li className={styles.list}>
            <NavLink to="./">Main page</NavLink>
          </li>
          <li className={styles.list}>
            <NavLink to="./about-us">About us</NavLink>
          </li>
          <li className={styles.list}>
            <NavLink to="./form">Form</NavLink>
          </li>
        </ul>
      </nav>
      <span className={styles.current_page}>{getCurrentPageName(location.pathname)}</span>
    </header>
  );
};

export default Header;
