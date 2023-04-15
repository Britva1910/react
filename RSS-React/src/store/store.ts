import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import searchReducer from '../store/reducers/searchData';
import { imageAPI } from '../services/ImagesService';

const rootReducer = combineReducers({
  searchReducer,
  [imageAPI.reducerPath]: imageAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(imageAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
