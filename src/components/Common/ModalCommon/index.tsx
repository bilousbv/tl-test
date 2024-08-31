import React from 'react';
import { Close } from '../Icon';
import Button from '../Button';

import './index.scss';

interface IModalCommon {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const ModalCommon: React.FC<IModalCommon> = ({ isOpen, handleClose, children }) =>
  isOpen ? (
    <>
      <div className="modal">{children}</div>

      <div className="modal-substrate" onClick={handleClose} />
    </>
  ) : undefined;

export default ModalCommon;
