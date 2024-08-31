import React from 'react';
import clsx from 'clsx';

import { INotification } from '../../../types';
import { CloseCircle } from '../Icon';
import Button from '../Button';

import './index.scss';

interface INotificationComponent extends INotification {
  handleClose: () => void;
}

const Notification: React.FC<INotificationComponent> = ({ title, message, type, handleClose }) => (
    <div className={clsx('notification', `notification-${type}`)}>
      <Button variant="ghost" className="notification__close-btn" onClick={handleClose}>
        <CloseCircle/>
      </Button>
      {title && <h2 className="notification__title">{title}</h2>}
      {message && <p className="notification__message">{message}</p>}
    </div>
  );

export default Notification;
