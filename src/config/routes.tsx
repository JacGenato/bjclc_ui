import React from 'react';
import { useRoutes } from 'react-router-dom';
import Post from '../components/Posts/Post';
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
        { path: 'post', element: <Post /> },
      ],
    },
  ]);
};
