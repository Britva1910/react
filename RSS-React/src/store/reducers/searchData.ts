import { IImageData } from '../../shared/models';
import { createSlice } from '@reduxjs/toolkit';

interface SearchState {
  userInput: string;
  searchResult: IImageData[];
}

const initialState: SearchState = {
  userInput: '',
  searchResult: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
});

export default searchSlice.reducer;
