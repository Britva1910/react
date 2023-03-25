import React, { RefObject } from 'react';
import styles from './form.module.scss';
import { countryList } from '../../../public/countries';

export default class Form extends React.Component {
  inputUserName: RefObject<HTMLInputElement>;
  inputUserSurname: RefObject<HTMLInputElement>;
  inputCountry: RefObject<HTMLInputElement>;
  constructor(props) {
    super(props);
    this.state = {
      countries: countryList,
      selectedCountry: '',
    };

    this.inputUserName = React.createRef();
    this.inputUserSurname = React.createRef();
    this.inputCountry = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectInput = this.handleSelectInput.bind(this);
  }

  handleSubmit() {
    this.props.updateData({
      name: this.inputUserName.current?.value,
      surname: this.inputUserSurname.current?.value,
    });
    console.log(this.inputUserName.current?.validity);
  }

  handleSelectInput(event) {
    this.setState({ selectedCountry: event.target.value });
  }

  cleareForm() {}

  render() {
    const { countries, selectedCountry } = this.state;
    return (
      <div className={styles.wrapper}>
        {/* Input text */}
        <div>
          <div className={styles.input_wrapper}>
            <span>Name*</span>
            <input
              type="text"
              className={`${styles.input_text} ${
                this.inputUserName.current?.validity.valid ? '' : styles.input_invalid
              }`}
              ref={this.inputUserName}
              required
              pattern="[A-Z][a-zA-Z]*"
            />
          </div>
          {!this.inputUserName.current?.validity.valid && (
            <span className={styles.error_message}>{'Error text'}</span>
          )}
        </div>
        <div>
          <div className={styles.input_wrapper}>
            <span>Surame*</span>
            <input
              type="text"
              className={`${styles.input_text} ${
                this.inputUserSurname.current?.validity.valid ? '' : styles.input_invalid
              }`}
              ref={this.inputUserSurname}
              required
              pattern="[A-Z][a-zA-Z]*"
            />
          </div>
          {!this.inputUserSurname.current?.validity.valid && (
            <span className={styles.error_message}>{'Error text'}</span>
          )}
        </div>
        <div>
          <div className={styles.input_wrapper}>
            <label htmlFor="country" className={styles.label}>
              Country*:
            </label>
            <select
              id="country"
              ref={this.inputCountry}
              value={selectedCountry}
              onChange={this.handleSelectInput}
              className={styles.select}
            >
              <option value="">--Select a country--</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          {!this.inputUserSurname.current?.validity.valid && (
            <span className={styles.error_message}>{'Error text'}</span>
          )}
        </div>
        <div>
          <div className={styles.input_wrapper}>
            <label className={styles.checkbox_container}>
              <input type="checkbox" />
              <span className={styles.checkmark}></span>I consent to my personal data
            </label>
          </div>
          {!this.inputUserSurname.current?.validity.valid && (
            <span className={styles.error_message}>{'Error text'}</span>
          )}
        </div>
        <button className={styles.button_submit} onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

/* 
input text - name surname
date input - birthday
dropdown/select - list of countries,
checkbox - "I consent to my personal data"
switcher - male/female, "I want to receive notifications about promo, sales, etc."
file upload - profile picture
*/
