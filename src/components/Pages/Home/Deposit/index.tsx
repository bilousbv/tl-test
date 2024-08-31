import React from 'react';
import { CRYPTO_PAYMENT_METHODS, PAYMENT_METHODS } from '../../../../contstants.ts';
import PaymentCard from '../../../Common/PaymentCard';

import './index.scss';

const Deposit: React.FC = () => (
  <div className="deposit">
    <h2>Make a Deposit</h2>
    <div className="deposit__payment-method">
      <h3>Choose payment method</h3>
      <div className="deposit__payment-method__container">
        <h4>Cards, E-Money, PIN</h4>
        <div className="deposit__payment-method__container__grid">
          {PAYMENT_METHODS.map((paymentMethod) => (
            <PaymentCard key={paymentMethod.name} {...paymentMethod} />
          ))}
        </div>
      </div>
      <div className="deposit__payment-method__container">
        <h4>Cryptocurrency</h4>
        <div className="deposit__payment-method__container__grid">
          {CRYPTO_PAYMENT_METHODS.map((paymentMethod) => (
            <PaymentCard key={paymentMethod.name} {...paymentMethod} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Deposit;
