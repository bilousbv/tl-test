import { IPaymentMethod, ITransaction } from './types';

export const BALANCE_AMOUNT = 125.02;
export const BALANCE_PERCENT = 13;

export const MINIMUM_DEPOSIT_VALUE = 21;
export const MAXIMUM_DEPOSIT_VALUE = 906;

export const DEPOSIT_INCREASE_STEPS = [10, 20, 30, 50, 100];

export const PROMO_CODE = 'ALPHA2021';

export const PAYMENT_METHODS: IPaymentMethod[] = [
  {
    id: 1,
    img: '/src/assets/mastercard.png',
    name: 'Mastercard',
    commission: 3,
    badge: 'Popular',
    badgeType: 'info',
  },
  {
    id: 2,
    img: '/src/assets/visa.png',
    name: 'Visa',
    commission: 3,
    badge: 'Trusted',
    badgeType: 'accent',
  },
  {
    id: 3,
    img: '/src/assets/skrill.png',
    name: 'Skrill',
    commission: 0,
  },
  {
    id: 4,
    img: '/src/assets/perfectMoney.png',
    name: 'Perfect Money, EUR',
    commission: 0,
  },
  {
    id: 5,
    img: '/src/assets/piastrix.png',
    name: 'Piastrix, EUR',
    commission: 0,
  },
  {
    id: 6,
    img: '/src/assets/sticpay.png',
    name: 'SticPay, EUR',
    commission: 0,
  },
  {
    id: 7,
    img: '/src/assets/pin.png',
    name: 'PIN',
    commission: 1,
  },
];

export const CRYPTO_PAYMENT_METHODS: IPaymentMethod[] = [
  {
    id: 1,
    img: '/src/assets/bitcoin.png',
    name: 'BTC',
    commission: 0,
  },
  {
    id: 2,
    img: '/src/assets/ethereum.png',
    name: 'ETH',
    commission: 0,
  },
  {
    id: 3,
    img: '/src/assets/tether.png',
    name: 'USDT',
    commission: 0,
  },
];

export const TRANSACTIONS: ITransaction[] = [
  {
    id: 142354,
    paymentMethod: PAYMENT_METHODS.find((paymentMethod) => paymentMethod.id === 6),
    type: 'withdraw',
    paymentDate: '2024-01-02T12:34:00Z',
    amount: 23.05,
    status: 'processing',
  },
  {
    id: 142355,
    paymentMethod: PAYMENT_METHODS.find((paymentMethod) => paymentMethod.id === 6),
    type: 'withdraw',
    paymentDate: '2024-12-05T15:40:00Z',
    amount: 123.27,
    status: 'active',
  },
  {
    id: 23561,
    paymentMethod: PAYMENT_METHODS.find((paymentMethod) => paymentMethod.id === 1),
    type: 'withdraw',
    paymentDate: '2024-11-24T04:20:00Z',
    amount: 80,
    status: 'performed',
  },
  {
    id: 2332,
    paymentMethod: PAYMENT_METHODS.find((paymentMethod) => paymentMethod.id === 1),
    type: 'withdraw',
    paymentDate: '2024-03-24T04:20:00Z',
    amount: 21,
    status: 'performed',
  },
  {
    id: 12332,
    paymentMethod: PAYMENT_METHODS.find((paymentMethod) => paymentMethod.id === 1),
    type: 'withdraw',
    paymentDate: '2024-06-24T04:20:00Z',
    amount: 190,
    status: 'active',
  },
  {
    id: 552232,
    paymentMethod: PAYMENT_METHODS.find((paymentMethod) => paymentMethod.id === 4),
    type: 'withdraw',
    paymentDate: '2024-08-24T04:20:00Z',
    amount: 900,
    status: 'active',
  },
  {
    id: 1552232,
    paymentMethod: PAYMENT_METHODS.find((paymentMethod) => paymentMethod.id === 3),
    type: 'withdraw',
    paymentDate: '2024-10-24T04:20:00Z',
    amount: 500,
    status: 'processing',
  },
];

export const TRANSACTIONS_FILTERS = [
  {
    field: 'id',
    label: 'Transaction Number',
  },
  {
    field: 'paymentDate',
    label: 'Payment Date',
  },
  {
    field: 'amount',
    label: 'Amount Payed',
  },
  {
    field: 'status',
    label: 'Operation Status',
  },
];

export const TRANSACTIONS_PAGE_LIMIT = 3;
