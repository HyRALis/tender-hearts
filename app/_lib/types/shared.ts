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
  | TRequesterListItem;

export type TAlignmentText = 'left' | 'right' | 'center';

export type TAlignmentFlex = 'start' | 'end' | 'center';
