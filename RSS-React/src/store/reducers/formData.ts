import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPersonCard } from '../../shared/models';

interface FormState {
  cardsData: IPersonCard[];
}

const initialState: FormState = {
  cardsData: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setCardsData(state, action: PayloadAction<IPersonCard>) {
      state.cardsData.push(action.payload);
    },
  },
});

export default formSlice.reducer;
