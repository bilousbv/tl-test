import React from 'react';
import Button from '../Button';
import { ChevronDown, Plus } from '../Icon';

import './index.scss';
import { BALANCE_AMOUNT, BALANCE_PERCENT } from '../../../contstants.ts';
import { useContextNotifications } from '../../../context/notifications.tsx';
import Dropdown from '../Dropdown';
import DepositModal from '../Modals/DepositModal';

const BalanceDetails: React.FC = () => {
  const { openModal } = useContextNotifications();

  const handleOpenModal = () => {
    openModal(<DepositModal />);
  };

  const labelRender = () => (
    <div className="balance-details__row">
      <span>{BALANCE_AMOUNT}$</span>
      <span className="balance-details__row__percent">{BALANCE_PERCENT}%</span>
      <ChevronDown />
    </div>
  );

  return (
    <div className="balance-details">
      <Dropdown
        items={[
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
        ]}
        labelRender={labelRender}
      />

      <Button variant="ghost" className="balance-details__add-button" onClick={handleOpenModal}>
        <Plus />
      </Button>
    </div>
  );
};

export default BalanceDetails;
