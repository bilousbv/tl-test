import React, { useState } from 'react';
import clsx from 'clsx';

import './index.scss';
import { Option, OptionValueType } from '../../../types';

interface IDropdown {
  className?: string;
  items: Option[];
  defaultValue?: OptionValueType;
  labelRender?: (activeItem: OptionValueType | undefined) => React.ReactNode;
}

const Dropdown: React.FC<IDropdown> = ({className, items, defaultValue, labelRender}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<OptionValueType | undefined>(defaultValue);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  const handleActiveItemChange = (item: OptionValueType) => {
    setActiveItem(item);
    setIsDropdownOpen(false);
  }

  const renderDropdownLabel = () => {
    if (labelRender) return labelRender(activeItem);

    const activeItemLabel = activeItem ? items.find((item) => item.value === activeItem) : undefined;

    return  activeItemLabel || 'Please select an option'
  }

  return (
    <div className={clsx('dropdown', className)}>
      <div className="dropdown__wrapper" onClick={handleDropdownToggle}>
        {renderDropdownLabel()}
      </div>
      <ul className={clsx('dropdown__content', { ['dropdown__content__shown']: isDropdownOpen})}>
        {items.map((item) => (
          <li
            role="presentation"
            key={`${item.value}`}
            className={clsx('dropdown__content__item', {
              ['dropdown__content__item__active']: item.value === activeItem
            })}
            onClick={() => handleActiveItemChange(item.value)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
