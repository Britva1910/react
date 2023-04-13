import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from '../store/reducers/searchData';

const rootReducer = combineReducers({
  searchReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
