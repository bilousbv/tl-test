import React, { useState } from 'react';

import './index.scss';
import clsx from 'clsx';
import { TRANSACTIONS, TRANSACTIONS_FILTERS, TRANSACTIONS_PAGE_LIMIT } from '../../../../contstants.ts';
import TransactionRow from './TransactionRow';
import Button from '../../../Common/Button';
import { ChevronDown, Filter } from '../../../Common/Icon';

interface ISort {
  field: string | null;
  direction: 'ASC' | 'DESC';
}

const Transactions: React.FC = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);
  const [pageLimit, setPageLimit] = useState<number>(TRANSACTIONS_PAGE_LIMIT);
  const [sort, setSort] = useState<ISort>({
    field: null,
    direction: 'ASC',
  });

  const handleFiltersToggle = () => {
    setIsFiltersOpen((prev) => !prev);
  }

  const handleSortChange = (sortField: string) => {
    setSort((prev) => {
      const field = sortField === prev.field && prev.direction === 'DESC' ? null : sortField;
      const direction = sortField === prev.field && prev.direction === 'ASC' ? 'DESC' : 'ASC';

      return {
        field,
        direction,
      }
    })
  }

  const sortTransactions = ((a, b) => {
    if (!sort.field) {
      return a.paymentDate > b.paymentDate ? -1 : 1
    }

    if (a[sort.field] === b[sort.field]) return 0

    if (sort.direction === 'ASC')
      return a[sort.field] > b[sort.field] ? -1 : 1

    return a[sort.field] < b[sort.field] ? -1 : 1
  });

  const handleIcreasePageLimit = () => {
    setPageLimit((prev) => prev + TRANSACTIONS_PAGE_LIMIT);
  };

  return (
    <div className="transactions">
      <div className="transactions__header">
        <h2><span className="transactions__header__desktop-title">Last </span>Transactions</h2>
        <div className="transactions__header__filters">
          <Button
            className={clsx('transactions__header__filters__button', {
              ['transactions__header__filters__button__active']: sort.field
            })}
            onClick={handleFiltersToggle}
          >
            <Filter/>
          </Button>
          <div className={clsx('transactions__header__filters__list', {
            ['transactions__header__filters__list__open']: isFiltersOpen
          })}>
            {TRANSACTIONS_FILTERS.map((item) => (
              <Button
                key={item.field}
                variant="ghost"
                className="transactions__header__filters__list__item"
                onClick={() => handleSortChange(item.field)}
              >
                <span>{item.label}</span>
                <ChevronDown className={clsx('transactions__header__filters__list__item__arrow',
                  {
                    ['transactions__header__filters__list__item__arrow__shown']: sort.field === item.field,
                    ['transactions__header__filters__list__item__arrow__rotated']: sort.direction === 'DESC'
                  })}
                />
              </Button>
            ))}
          </div>
        </div>
      </div>
      {TRANSACTIONS
        .sort(sortTransactions)
        .filter((_, index) => index < pageLimit)
        .map((transaction) => (
          <TransactionRow key={transaction.id} {...transaction}/>
        ))
      }
      {TRANSACTIONS.length > pageLimit && (
        <Button
          variant="primary"
          className="transactions__button"
          onClick={handleIcreasePageLimit}
        >
          Show More
        </Button>
      )}
    </div>
  );
}

export default Transactions;
