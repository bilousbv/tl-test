import React, { createContext, PropsWithChildren, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { INotification, JsonResult } from '../types';
import Notification from '../components/Common/Notification';
import ModalCommon from '../components/Common/ModalCommon';

interface NotificationsContext extends JsonResult {
  openNotification: (notification: INotification) => void;
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
}


const defaultValue = {
  openNotification: () => undefined,
  openModal: () => undefined,
  closeModal: () => undefined,
};

export const NotificationsContext = createContext<NotificationsContext>(defaultValue);


const NotificationsProvider = ({ children }: PropsWithChildren) => {
  const [notifications, setNotifications] = useState<INotification[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>();


  const handleNotificationClose = (id?: string) => {
    setNotifications((prev) => prev.filter(
      (notification) => notification.id !== id)
    )
  }

  const openNotification = (notification: INotification) => {
    if (!notification.title && !notification.message) return;

    const id = uuidv4();

    setNotifications((prev) => [...prev, { id, ...notification}]);

    setTimeout(() => {
      handleNotificationClose(id)
    }, 3000)
  };

  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setIsModalOpen(true);
    document.body.classList.add('body-blocked');
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    document.body.classList.remove('body-blocked');
  }

  return (
    <NotificationsContext.Provider
      value={{
        openNotification,
        openModal,
        closeModal,
      }}
    >
      <div className="notifications-list">
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            handleClose={() => handleNotificationClose(notification.id)}
            {...notification}
          />
        ))}
      </div>
      <ModalCommon isOpen={isModalOpen} handleClose={closeModal}>
        {modalContent}
      </ModalCommon>
      {children}
    </NotificationsContext.Provider>
  );
};

export default NotificationsProvider;

export const useContextNotifications = (): NotificationsContext => useContext(NotificationsContext);
