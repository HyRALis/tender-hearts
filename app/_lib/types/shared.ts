import { TAdminListItem } from './admin';
import { TDonorListItem } from './donor';
import { TRequesterListItem } from './requester';

export type TPortalType =
  | 'donor'
  | 'admin'
  | 'landing'
  | 'requester'
  | 'reviewer';

export type TRole = 'donor' | 'admin' | 'requester' | 'reviewer';

export enum RoleEnum {
  Admin = 'admin',
  Donor = 'donor',
  Requester = 'requester',
}

export type TListItemType =
  | TAdminListItem
  | TDonorListItem
  | TRequesterListItem
  | 'Home';

export type TAlignmentText = 'left' | 'right' | 'center';

export type TAlignmentFlex = 'start' | 'end' | 'center';

export type TOrder = 'asc' | 'desc';

export type TPaymentMethods = 'credit_card' | 'debit_card' | 'paypal';

export interface TDonationTableRowData {
  donorName: string;
  dateTime: string;
  paymentMethod: TPaymentMethods;
  donationAmount: number;
  message: string;
}

export interface TDonationTableHeadCellProps {
  disablePadding: boolean;
  id: keyof TDonationTableRowData;
  label: string;
  align: 'right' | 'left';
}