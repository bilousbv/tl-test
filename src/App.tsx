import React from 'react';
import './App.scss';
import Routes from './routes';
import NotificationsProvider from './context/notifications.tsx';

const App: React.FC = () => (
  <NotificationsProvider>
    <Routes />
  </NotificationsProvider>
);

export default App;
