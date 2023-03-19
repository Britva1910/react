import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>main page</div>,
  },
  {
    path: '/about-us',
    element: <div>about us page</div>,
  },
  {
    path: '*',
    element: <div>404 page</div>,
  },
]);
