import { createBrowserRouter } from 'react-router-dom';

import AboutPage from '@/pages/About';
import HomePage from '@/pages/Home';
import { Layout } from '@/shared/ui/Layout';

export const appRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
    ],
  },
]);
