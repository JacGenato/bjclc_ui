import React from 'react';
import { useRoutes } from 'react-router-dom';
import { DashboardLayout } from '../layouts/dashboard';
import { Home } from '../pages/Home';

export const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
  ]);
};
