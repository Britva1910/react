import React, { RefObject } from 'react';
import styles from './form.module.scss';
import { countryList } from '../../../public/countries';

export default class Form extends React.Component {
  inputUserName: RefObject<HTMLInputElement>;
  inputUserSurname: RefObject<HTMLInputElement>;
  inputCountry: RefObject<HTMLInputElement>;
  inputConsent: RefObject<HTMLInputElement>;
  inputPromo: RefObject<HTMLInputElement>;
  inputSales: RefObject<HTMLInputElement>;
  inputFile: RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      countries: countryList,
      profilePicture: null,
      fields: {},
      errors: {},
    };

    this.inputUserName = React.createRef();
    this.inputUserSurname = React.createRef();
    this.inputCountry = React.createRef();
    this.inputConsent = React.createRef();
    this.inputPromo = React.createRef();
    this.inputSales = React.createRef();
    this.inputFile = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectInput = this.handleSelectInput.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const newData = {
      name: this.inputUserName.current?.value,
      surname: this.inputUserSurname.current?.value,
      country: this.inputCountry.current?.value,
      consent: this.inputConsent.current?.checked,
      promoValue: this.inputPromo.current?.checked,
      file:
        this.inputFile.current?.files?.length > 0
          ? URL.createObjectURL(this.inputFile.current.files[0])
          : '',
    };

    this.setState({ fields: newData });
    const valid = this.validation();
    //console.log('valid - ', valid);
    if (valid) {
      this.props.updateData(newData);
    }
  }

  handleInputUserName() {
    let fields = this.state.fields;
    fields['name'] = this.inputUserName.current?.value; //FIXME -
    this.setState({ fields });
  }

  handleInputUserSurname() {
    let fields = this.state.fields;
    fields['surname'] = this.inputUserSurname.current?.value; //FIXME -
    this.setState({ fields });
  }

  handleSelectInput() {
    let fields = this.state.fields;
    fields['country'] = this.inputCountry.current?.value;
    this.setState({ fields });
  }

  handleFileChange(event) {
    this.setState({ profilePicture: event.target.files[0] });
  }

  validation() {
    const fields = this.state.fields;
    const errors = this.state.errors;
    let formIsValid = true;

    //Name
    if (!fields['name']) {
      formIsValid = false;
      errors['name'] = 'Cannot be empty';
    }

    if (typeof fields['name'] !== 'undefined') {
      const regex = /^[A-Z]/;
      if (!regex.test(fields['name'])) {
        formIsValid = false;
        errors['name'] = 'Only letters, the first letter should be uppercase';
      }
      if (fields['name'].length < 5) {
        formIsValid = false;
        errors['name'] = 'Name should be at least 5 characters';
      }
    }
    //Surname
    if (!fields['surname']) {
      formIsValid = false;
      errors['surname'] = 'Cannot be empty';
    }

    if (typeof fields['surname'] !== 'undefined') {
      const regex = /^[A-Z]/;
      if (!regex.test(fields['surname'])) {
        formIsValid = false;
        errors['surname'] = 'Only letters, the first letter should be uppercase';
      }
      if (fields['surname'].length < 5) {
        formIsValid = false;
        errors['surname'] = 'Surname should be at least 5 characters';
      }
    }
    //Country
    if (typeof fields['country'] !== 'undefined') {
      if (fields['country'].length == 0) {
        formIsValid = false;
        errors['country'] = 'Please select a country';
      }
    } else {
      errors['country'] = '';
    }

    //Consent
    console.log('consent - ', fields['consent']);
    if (typeof fields['consent'] == 'undefined') {
      errors['consent'] = 'Please consent your personal data';
    } else {
      errors['consent'] = '';
    }
    //Promo
    if (typeof fields['promoValue'] == 'undefined') {
      errors['promoValue'] = 'Please choose one point';
    } else {
      errors['promoValue'] = '';
    }
    //File

    if (formIsValid) {
      for (const key in errors) {
        errors[key] = '';
      }
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  cleareForm() {}

  render() {
    const { countries, selectedCountry, profilePicture } = this.state;
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
              onChange={this.handleInputUserName.bind(this)}
            />
          </div>
          <span className={styles.error_message}>{this.state.errors['name']}</span>
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
              onChange={this.handleInputUserSurname.bind(this)}
            />
          </div>
          <span className={styles.error_message}>{this.state.errors['surname']}</span>
        </div>
        <div>
          <div className={styles.input_wrapper}>
            <label htmlFor="country" className={styles.label}>
              Country*:
            </label>
            <select
              id="country"
              ref={this.inputCountry}
              value={this.state.fields.country}
              onChange={this.handleSelectInput}
              className={styles.select}
            >
              <option value="">-- Select a country --</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <span className={styles.error_message}>{this.state.errors['country']}</span>
        </div>
        <div>
          <div className={styles.input_wrapper}>
            <label className={styles.checkbox_container}>
              <input type="checkbox" ref={this.inputConsent} />
              <span className={styles.checkmark}></span>I consent to my personal data
            </label>
          </div>
          <span className={styles.error_message}>{this.state.errors['consent']}</span>
        </div>
        {/* radio */}

        <div className={styles.notification_form}>
          <div>
            <label>
              <input type="radio" name="promo" value="yes" ref={this.inputPromo} />
              Yes, I want to receive promo notifications
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="promo" value="no" ref={this.inputSales} />
              {"No, I don't want to receive promo notifications"}
            </label>
          </div>
          <span className={styles.error_message}>{this.state.errors['promoValue']}</span>
        </div>

        <div className={styles.wrapper_file}>
          <h3>Upload Profile Picture</h3>
          <label htmlFor="profile-picture" className={styles.label_file}>
            {profilePicture ? profilePicture.name : 'Choose file...'}
          </label>
          <input
            type="file"
            id="profile-picture"
            ref={this.inputFile}
            className={styles.input_file}
            onChange={this.handleFileChange}
          />
        </div>
        <button className={styles.button_submit} onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}
