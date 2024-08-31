import React from 'react';
import clsx from 'clsx';

import { IPaymentMethod } from '../../../types';

import './index.scss';

const PaymentCard: React.FC<IPaymentMethod> = ({
  img,
  name,
  commission = 0,
  badge = undefined,
  badgeType = undefined
}) => (
  <div className="payment-card">
    {badge && badgeType && (
      <div className={clsx('payment-card__badge', `payment-card__badge-${badgeType}`)}>{badge}<span /></div>
    )}
    <img className="payment-card__image" src={img} alt={name} />
    <div className="payment-card__text-box">
      <p className="payment-card__text-box__name">{name}</p>
      <p className="payment-card__text-box__commission">Commission: {commission}%</p>
    </div>

  </div>
);

export default PaymentCard;
