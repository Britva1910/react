import React from 'react';
import styles from './personCard.module.scss';

export default class PersonCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <p>User</p>
        <div>
          <img src={this.props.data.file} alt="" />
        </div>
        <div>
          <span>User name: </span>
          <span>{this.props.data.name}</span>
        </div>
        <div>
          <span>User surname: </span>
          <span>{this.props.data.surname}</span>
        </div>
        <div>
          <span>User country: </span>
          <span>{this.props.data.country}</span>
        </div>
        <div>
          <span>Consented data: </span>
          <span>{this.props.data.consent ? 'Yes' : 'No'}</span>
        </div>
        <div>
          <span>Promo notifications: </span>
          <span>{this.props.data.promoValue ? 'Yes' : 'No'}</span>
        </div>
      </div>
    );
  }
}
