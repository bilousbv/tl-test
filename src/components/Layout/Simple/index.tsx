import React, { PropsWithChildren } from 'react';

import './index.scss';

const Simple: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="layout">
    {children}
  </div>
);

export default Simple;
