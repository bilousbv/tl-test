import React from 'react';

import './index.scss';
import clsx from 'clsx';
import moment from 'moment-timezone';

import { capitalize } from '../../../../../utils/text.ts';
import { ITransaction } from '../../../../../types';

const TransactionRow: React.FC<ITransaction> = ({id, paymentMethod, type, paymentDate, status, amount}) => (
  <div className="transaction">
    <div className="transaction__group">
      <img src={paymentMethod.img} alt={paymentMethod.name} className="transaction__group__image" />
    </div>
    <div className="transaction__group">
      <p
        className={clsx(
          'transaction__group__status',
          `transaction__group__status__${status}`
        )}
      >
        {capitalize(status)}
      </p>
      <p className="transaction__group__label">Operation Status</p>
    </div>
    <div className="transaction__group">
      <p className="transaction__group__value">by {paymentMethod.name}</p>
      <p className="transaction__group__label">{capitalize(type)}</p>
    </div>
    <div className="transaction__group">
      <p className="transaction__group__value">{id}</p>
      <p className="transaction__group__label">Transaction Number</p>
    </div>
    <div className="transaction__group">
      <p className="transaction__group__value">{moment(paymentDate).format('DD.MM [at] HH:MMA')}</p>
      <p className="transaction__group__label">Payment Date</p>
    </div>
    <div className="transaction__group">
      <p className="transaction__group__value">{amount.toFixed(2).toLocaleString()}$</p>
      <p className="transaction__group__label">Amount Payed</p>
    </div>
  </div>
);

export default TransactionRow;
