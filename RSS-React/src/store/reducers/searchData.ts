import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchState {
  userInput: string;
}

const initialState: SearchState = {
  userInput: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setUserInputText(state, action: PayloadAction<string>) {
      state.userInput = action.payload;
    },
  },
});

export default searchSlice.reducer;
