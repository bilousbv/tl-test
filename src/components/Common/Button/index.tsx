import React, { ButtonHTMLAttributes } from 'react';

import './index.scss';

type VariantType = 'primary' | 'ghost' | 'default';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: VariantType;
}

const Button: React.FC<IButton> = ({ className, children, variant = 'default', ...props}) => (
  <button {...props} className={`btn btn-${variant} ${className || ''}`} type="button">{children}</button>
);

export default Button;
