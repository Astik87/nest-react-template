import React from 'react';
import { hot } from 'react-hot-loader/root';
import { RouterProvider } from 'react-router-dom';

import { appRouter } from './appRouter';

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default hot(App);
