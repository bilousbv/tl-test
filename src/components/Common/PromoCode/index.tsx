import React, { useState } from 'react';
import { CheckCircle } from '../Icon';
import Button from '../Button';

import './index.scss';
import TextInput from '../TextInput';
import { PROMO_CODE } from '../../../contstants.ts';
import { useContextNotifications } from '../../../context/notifications.tsx';

interface IPromoCode {
  title?: string;
  description?: string;
}

const PromoCode: React.FC<IPromoCode> = ({ title = undefined, description = undefined }) => {
  const { openNotification } = useContextNotifications();

  const [promoCode, setPromoCode] = useState<string>('');
  const [isPromoCodeValid, setIsPromoCodeValid] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPromoCode(event.target.value)
  }

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === PROMO_CODE.toLowerCase()) {
      openNotification({ message: 'Promo code was applied successfully', type: 'success'});
      setIsPromoCodeValid(true);
    } else {
      openNotification({ message: 'Promo code is invalid', type: 'error'});
    }
  }

  return (
    <div className="promo-code">
      {title && <h3 className="promo-code__title">{title}</h3>}
      {description && <p className="promo-code__description">{description}</p>}
      <div className="promo-code__controls">
        <TextInput
          onChange={handleChange}
          value={promoCode.toUpperCase()}
          className="promo-code__controls__input"
          icon={isPromoCodeValid && <CheckCircle className="promo-code__controls__icon"/>}
        />
        <Button
          onClick={applyPromoCode}
          disabled={!promoCode}
          variant="primary"
          className="promo-code__controls__button"
        >
          Apply
        </Button>
      </div>
    </div>
  );
}

export default PromoCode;
