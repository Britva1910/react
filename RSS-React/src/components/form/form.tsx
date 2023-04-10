import React from 'react';
import styles from './form.module.scss';
import { countryList } from '../../../public/countries';
import { IPersonCard } from '../../shared/models';
import { useForm } from 'react-hook-form';

interface IFormProps {
  updateData: (data: IPersonCard) => void;
}

const Form: React.FC<IFormProps> = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IPersonCard>();

  const onSubmit = (data: IPersonCard) => {
    props.updateData(data);
    reset();
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            First name
            <input
              type="text"
              {...register('firstName', {
                required: 'Please enter your name',
                pattern: {
                  value: /^[A-Z]/,
                  message: 'Only latin letters, the first letter should be uppercase',
                },
              })}
            />
            {errors?.firstName && <p>{errors?.firstName?.message as string}</p>}
          </label>
        </div>
        <div>
          <label>
            Last name
            <input
              type="text"
              {...register('lastName', {
                required: 'Please enter your last name',
                pattern: {
                  value: /^[A-Z]/,
                  message: 'Only latin letters, the first letter should be uppercase',
                },
              })}
            />
            {errors?.lastName && <p>{errors?.lastName?.message as string}</p>}
          </label>
        </div>
        <div>
          <label>
            Date of birth
            <input
              type="date"
              {...register('birthday', {
                required: 'Please enter your date of birth',
              })}
            />
            {errors?.birthday && <p>{errors?.birthday?.message as string}</p>}
          </label>
        </div>
        <div>
          <label>
            Country
            <select {...register('country', { required: 'Please enter your country' })}>
              <option value="">-- Select a country --</option>
              {countryList.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors?.country && <p>{errors?.country?.message as string}</p>}
          </label>
        </div>
        <div>
          <label className={styles.checkbox_container}>
            <input
              type="checkbox"
              {...register('consent', { required: 'Please consent your personal data' })}
            />
            <span className={styles.checkmark}></span>I consent to my personal data
            {errors?.consent && <p>{errors?.consent?.message as string}</p>}
          </label>
        </div>
        <div className={styles.notification_form}>
          <div>
            <label>
              <input
                type="radio"
                value="yes"
                {...register('promo', { required: 'Please choose one option' })}
              />
              Yes, I want to receive promo notifications
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="no"
                {...register('promo', { required: 'Please choose one option' })}
              />
              {"No, I don't want to receive promo notifications"}
            </label>
          </div>
          <div className={styles.error_msg}>
            {errors?.promo && <p>{errors?.promo?.message as string}</p>}
          </div>
        </div>
        <div className={styles.wrapper_file}>
          <h3>Upload Profile Picture</h3>
          <label htmlFor="profile-picture" className={styles.label_file}></label>
          <input
            type="file"
            id="profile-picture"
            className={styles.input_file}
            {...register('file', { required: 'Please choose a file' })}
          />
          <div className={styles.error_msg}>
            {errors?.file && <p>{errors?.file?.message as string}</p>}
          </div>
        </div>
        <input role="btn_submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
