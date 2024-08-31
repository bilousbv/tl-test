import React, { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import './index.scss';

interface ITextInput extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  inputClassName?: string;
}

const TextInput: React.FC<ITextInput> = ({ icon = undefined, className, inputClassName = undefined, ...props }) => (
  <div className={clsx('input-row', className)}>
    <input type="text" className={clsx('input-row__input', inputClassName)} {...props} />
    <div className="input-row__icon">{icon}</div>
  </div>
);

export default TextInput;
