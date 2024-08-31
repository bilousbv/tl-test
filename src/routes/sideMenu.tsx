import React from 'react';
import { IRoute } from '../types';
import Home from '../pages/home';

const sideMenuRoutes: IRoute[] = [
  {
    bind: {
      path: '/casino-games',
      element: <Home />,
    },
    name: 'Casino Games',
  },
  {
    bind: {
      path: '/live-games',
      element: <Home />,
    },
    name: 'Live Games',
  },
  {
    bind: {
      path: '/tv-bet',
      element: <Home />,
    },
    name: 'TV-Bet',
  },
  {
    bind: {
      path: '/sport-games',
      element: <Home />,
    },
    name: 'Sport Games',
  },
  {
    bind: {
      path: '/virtual',
      element: <Home />,
    },
    name: 'Virtual',
  },
  {
    bind: {
      path: '/tournaments',
      element: <Home />,
    },
    name: 'Tournaments',
  },
  {
    bind: {
      path: '/spin-shop',
      element: <Home />,
    },
    name: 'Spin Shop',
  },
  {
    bind: {
      path: '/faq',
      element: <Home />,
    },
    name: 'FAQ',
  },
  {
    bind: {
      path: '/support-chat',
      element: <Home />,
    },
    name: 'Support Chat',
  },
];

export default sideMenuRoutes;
