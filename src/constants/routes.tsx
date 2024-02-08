import React from 'react';

import { BankCardPage } from '@pages/BankCard';
import { HomePage } from '@pages/Home';
import { NotFoundPage } from '@pages/NotFound';
import { TimelinePage } from '@pages/Timeline';
import { Layout } from '@components/Layout';

export const pageRoutes = [
  { id: 1, path: '/', element: <HomePage /> },
  { id: 2, path: '/timeline', element: <TimelinePage /> },
  { id: 3, path: '/bank-card', element: <BankCardPage /> },
  { id: 4, path: '*', element: <NotFoundPage /> },
];

export const layoutRoute = {
  path: '/',
  element: <Layout />,
};
