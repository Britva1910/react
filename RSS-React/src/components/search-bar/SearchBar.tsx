import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from '../search-bar/search-bar.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/reducers/redux';
import { searchSlice } from '../../store/reducers/searchData';

const SearchBar: React.FC = () => {
  const [userInputData, setUserInputData] = useState<string>('');

  const { userInput } = useAppSelector((state) => state.searchReducer);
  const { setUserInputText } = searchSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    setUserInputData(userInput);
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setUserInputData(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <input
        defaultValue={userInput}
        className={styles.input}
        placeholder="search"
        type="text"
        onChange={handleChange}
      />
      <button onClick={() => dispatch(setUserInputText(userInputData))}>Search</button>
    </div>
  );
};

export default SearchBar;
