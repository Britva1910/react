import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IImageData, IResponseSearchByWord } from '../shared/models';

const BASE_URL = 'https://api.unsplash.com';
const USER_ID = 'xJGDNkDt7wD9WsFgcHle9TXtWZKQRC7NLv6-rfAO8lY';

export const imageAPI = createApi({
  reducerPath: 'imagesAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    fetchImagesByWord: build.query<IResponseSearchByWord, string>({
      query: (userInput: string) => ({
        url: '/search/photos',
        params: {
          client_id: USER_ID,
          query: userInput,
          orientation: 'landscape',
        },
      }),
    }),
    fetchImageByID: build.query<IImageData, string>({
      query: (imageID: string) => ({
        url: `/photos/${imageID}`,
        params: {
          client_id: USER_ID,
        },
      }),
    }),
  }),
});
