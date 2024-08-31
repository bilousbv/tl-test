import React, { useState } from 'react';
import Button from '../../Button';
import { ChevronDown, ChevronLeft, Close } from '../../Icon';
import { useContextNotifications } from '../../../../context/notifications.tsx';

import './index.scss';
import {
  BALANCE_AMOUNT, DEPOSIT_INCREASE_STEPS,
  MAXIMUM_DEPOSIT_VALUE,
  MINIMUM_DEPOSIT_VALUE,
  PAYMENT_METHODS
} from '../../../../contstants.ts';
import Dropdown from '../../Dropdown';
import { IPaymentMethod, OptionValueType } from '../../../../types';
import TextInput from '../../TextInput';
import PromoCode from '../../PromoCode';

const DepositModal: React.FC = () => {
  const { openNotification, closeModal } = useContextNotifications();
  const [amount, setAmount] = useState<number | null>(MINIMUM_DEPOSIT_VALUE);

  const paymentMethodDropdownRender = (id: OptionValueType | undefined) => {
    const activeItem = PAYMENT_METHODS.find((paymentMethod) => paymentMethod.id === id);

    if (!activeItem) {
      return (
        <div className="deposit-modal__content__dropdown__content">
          <div className="deposit-modal__content__dropdown__content__info">
            <p className="deposit-modal__content__dropdown__content__value">
              Payment Method is not defined
            </p>
          </div>
          <ChevronDown className="deposit-modal__content__dropdown__content__arrow" />
        </div>
      )
    }

    return (
      <div className="deposit-modal__content__dropdown__content">
        <div className="deposit-modal__content__dropdown__content__image-box">
          <img
            src={activeItem.img}
            alt={activeItem.name}
            className="deposit-modal__content__dropdown__content__image-box__image"
          />
        </div>
        <div className="deposit-modal__content__dropdown__content__info">
          <p className="deposit-modal__content__dropdown__content__value">
            {activeItem.name} • Commission {activeItem.commission}%
          </p>
          <p className="deposit-modal__content__dropdown__content__description">
            Please notice that you will send money in the USD
          </p>
        </div>
        <ChevronDown className="deposit-modal__content__dropdown__content__arrow" />
      </div>
    );
  }

  const getPaymentMethodLabel = (paymentMethod: IPaymentMethod) => (
    <div key={paymentMethod.id} className="deposit-modal__content__dropdown__item">
      <div className="deposit-modal__content__dropdown__item__image-box">
        <img
          src={paymentMethod.img}
          alt={paymentMethod.name}
          className="deposit-modal__content__dropdown__item__image-box__image"
        />
      </div>
      <div className="deposit-modal__content__dropdown__item__text-box">
        <p className="deposit-modal__content__dropdown__item__text-box__name">
          {paymentMethod.name}
        </p>
        <p className="deposit-modal__content__dropdown__item__text-box__commission">
          Commission: {paymentMethod.commission}%
        </p>
      </div>
    </div>
  )

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value.replace(/\D/m, ''), 10);

    if (Number.isNaN(newValue)) {
      setAmount(null);
    } else {
      setAmount(newValue)
    }
  }

  const handleInputBlur = () => {
    if (amount < MINIMUM_DEPOSIT_VALUE) {
      openNotification({ message: `Amount should be more than ${MINIMUM_DEPOSIT_VALUE}$`, type: 'error'});
      setAmount(MINIMUM_DEPOSIT_VALUE)
    }
    if (amount > MAXIMUM_DEPOSIT_VALUE) {
      openNotification({ message: `Amount should be less than ${MAXIMUM_DEPOSIT_VALUE}$`, type: 'error'});
      setAmount(MAXIMUM_DEPOSIT_VALUE)
    }
  }

  const handleIncreaseAmount = (value: number) => {
    setAmount((prev) => {
      const newValue = prev + value;

      return newValue > MAXIMUM_DEPOSIT_VALUE ? MAXIMUM_DEPOSIT_VALUE : newValue;
    })
  }

  return (
    <div className="deposit-modal">
      <div className="deposit-modal__header">
        <Button variant="ghost" className="deposit-modal__header__title" onClick={closeModal}>
          <ChevronLeft className="deposit-modal__header__title__icon"/>
          <h4>Back to Payment Method</h4>
        </Button>
        <Button variant="ghost" className="deposit-modal__header__close-btn" onClick={closeModal}>
          <Close/>
        </Button>
      </div>
      <div className="deposit-modal__banner">
        <span className="deposit-modal__banner__label">Current Balance:</span>
        <span className="deposit-modal__banner__value">$ {BALANCE_AMOUNT}</span>
      </div>
      <div className="deposit-modal__content">
        <Dropdown
          className="deposit-modal__content__dropdown"
          defaultValue={1}
          items={PAYMENT_METHODS.map((paymentMethod) => ({
            value: paymentMethod.id,
            label: getPaymentMethodLabel(paymentMethod)
          }))}
          labelRender={paymentMethodDropdownRender} />
      </div>
      <div className="deposit-modal__content__form">
        <h4 className="deposit-modal__content__form__title">Amount</h4>
        <TextInput
          inputClassName="deposit-modal__content__form__input"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          value={`$${amount || ''}`}
        />
        <div className="deposit-modal__content__form__controls">
          {DEPOSIT_INCREASE_STEPS.map((step) => (
            <Button
              key={step}
              onClick={() => handleIncreaseAmount(step)}
            >
              + ${step}
            </Button>
          ))}
        </div>
        <p className="deposit-modal__content__form__hint">
          From {MINIMUM_DEPOSIT_VALUE.toFixed(2)} to {MAXIMUM_DEPOSIT_VALUE.toFixed(2)} USD at a time
        </p>
      </div>
      <PromoCode title="Promo Code" />
      <Button variant="primary" onClick={closeModal}>Deposit</Button>
    </div>
  );
};

export default DepositModal;
