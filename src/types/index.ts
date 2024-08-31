import React, { ReactNode } from 'react';
import { RouteProps } from 'react-router-dom';

export interface JsonResult {
  // eslint-disable-next-line
  [key: string]: any;
}

export type OptionValueType = string | boolean | number;

export interface Option {
  value: string | boolean | number;
  label: string | React.ReactNode;
}

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export interface INotification {
  id?: string;
  title?: string;
  message?: string;
  type: NotificationType;
}

export interface IRoute {
  bind: RouteProps;
  name?: string;
  icon?: ReactNode;
  parent?: IRoute;
  hidden?: boolean;
  onClick?: () => void;
  children?: IRoute[];
  privateRoute?: boolean;
  adminRoute?: boolean;
}

export type PaymentMethodBadgeType = 'info' | 'accent';

export interface IPaymentMethod {
  id: number;
  img: string;
  name: string;
  commission?: number;
  badge?: string;
  badgeType?: PaymentMethodBadgeType;
}

export type TransactionType = 'withdraw' | 'deposit';
export type TransactionStatusType = 'processing' | 'active' | 'performed';

export interface ITransaction {
  id: number;
  paymentMethod: IPaymentMethod;
  type: TransactionType;
  paymentDate: string;
  amount: number;
  status: TransactionStatusType;
}
