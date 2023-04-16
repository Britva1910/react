import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from '../store/reducers/searchData';
import formReducer from '../store/reducers/formData';
import { imageAPI } from '../services/ImagesService';

const rootReducer = combineReducers({
  searchReducer,
  formReducer,
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
