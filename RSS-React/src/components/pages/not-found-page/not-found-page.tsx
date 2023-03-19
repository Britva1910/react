import React from 'react';
import styles from './not-found-page.module.scss';

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <span>404</span>
      </div>
    );
  }
}
