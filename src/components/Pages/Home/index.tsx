import React from 'react';

import Deposit from './Deposit';
import PromoCode from '../../Common/PromoCode';

import './index.scss';
import Transactions from './Transactions';

const Home: React.FC = () => (
  <div className="home-content">
    <Deposit />
    <PromoCode title="Have a Promo Code?" description="Enter promo code here. It will activate a special bonus!" />
    <Transactions />
  </div>
);

export default Home;
