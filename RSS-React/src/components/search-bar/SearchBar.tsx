import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from '../search-bar/search-bar.module.scss';
import axios from 'axios';
import { IResponseSearchByWord } from '../../shared/models';

type SearchBarProps = {
  setResponse: (response: IResponseSearchByWord) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ setResponse }) => {
  const inputValueFromLocalStorage: string | null = localStorage.getItem('input');
  const [userInputData, setUserInputData] = useState<string>(
    inputValueFromLocalStorage !== null ? inputValueFromLocalStorage : ''
  );

  useEffect(() => {
    localStorage.setItem('input', userInputData);
  }, [userInputData]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setUserInputData(event.target.value);
  };

  const getDataByInput = () => {
    axios
      .get<IResponseSearchByWord>(
        `https://api.unsplash.com/search/photos?client_id=xJGDNkDt7wD9WsFgcHle9TXtWZKQRC7NLv6-rfAO8lY&query=${userInputData}`
      )
      .then((response) => {
        //console.log(response.data);

        setResponse(response.data);
      })
      .catch((e) => console.log(e)); //TODO - write error message
  };

  return (
    <div className={styles.wrapper}>
      <input
        defaultValue={userInputData}
        className={styles.input}
        placeholder="search"
        type="text"
        onChange={handleChange}
      />
      <button onClick={getDataByInput}>Search</button>
    </div>
  );
};

export default SearchBar;
