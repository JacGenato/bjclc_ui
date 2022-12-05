import React from 'react';
import { useRoutes } from 'react-router-dom';
import Post from '../pages/Posts/Post';
import Posts from '../pages/Posts/Posts';
import CreateUpdatePost from '../pages/Posts/CreateUpdatePost';
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
        { path: 'post/:id', element: <Post /> },
        { path: 'posts', element: <Posts /> },
        { path: 'create', element: <CreateUpdatePost /> },
      ],
    },
  ]);
};
