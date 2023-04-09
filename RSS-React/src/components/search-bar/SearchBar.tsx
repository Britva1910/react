import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from '../search-bar/search-bar.module.scss';

type SearchBarProps = {
  setUserInput: (userInput: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ setUserInput }) => {
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

  return (
    <div className={styles.wrapper}>
      <input
        defaultValue={userInputData}
        className={styles.input}
        placeholder="search"
        type="text"
        onChange={handleChange}
      />
      <button onClick={() => setUserInput(userInputData)}>Search</button>
    </div>
  );
};

export default SearchBar;
