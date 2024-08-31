import React from 'react';

import Simple from '../Simple';

import Header from './Header';

interface IMain {
  children: React.ReactNode;
}

const Main: React.FC<IMain> = ({ children }) => (
  <Simple>
    <Header />
    <div className="page-content">
      <div className="container">{children}</div>
    </div>
  </Simple>
);

export default Main;
