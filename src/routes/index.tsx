import React from 'react';

import { BrowserRouter, Navigate, Route as PublicRoute, Routes } from 'react-router-dom';

import { IRoute } from '../types';
import sideMenuRoutes from './sideMenu';
import Home from '../pages/home';
import NotFound from '../pages/errors/notFound';

const Route: React.FC = (): JSX.Element => {
  const routes: IRoute[] = [
    {
      bind: {
        path: '/home',
        element: <Home />,
      },
      name: 'Home',
    },
    {
      bind: {
        path: '/not-found',
        element: <NotFound />,
      },
      name: 'Not Found',
    },
    ...sideMenuRoutes,
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <PublicRoute key={route.bind.path} element={route.bind.element} path={route.bind.path} />
        ))}
        <PublicRoute path="/" element={<Navigate to="/home" replace />} />
        <PublicRoute path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Route;
