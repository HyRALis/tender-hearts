import { TListItemType, TLocales } from '../../types/shared';

export const LOCALES: TLocales[] = ['en', 'mk'];
export const PROTECTED_ROUTES = ['admin', 'donor', 'requester', 'reviewer'];

export const COLORS = {
  PRIMARY: '#003366',
  PRIMARY_LIGHT: '#0056AC',
  PRIMARY_TWO: '#228B22',
  ACCENT: '#FF8081',
  ACCENT_TWO: '#FFB6C1',
  NATURAL: '#FFFFFF',
  NATURAL_TWO: '#D3D3D3',
};

export const DRAWER_WIDTH = 320;
export const BORDER_RADIUS = '0.8rem';
export const PADDING = '1.2rem';

//Tabs per portal
export const DONOR_TABS: TListItemType[] = [
  'Dashboard',
  'Browse Requests',
  'Donation History',
  'Profile',
  'Home',
];

export const ADMIN_TABS: TListItemType[] = [
  'Dashboard',
  'Manage Users',
  'Manage Requests',
  'Reports',
  'Home',
];

export const REQUESTER_TABS: TListItemType[] = [
  'Dashboard',
  'Submit Request',
  'Track Requests',
  'Donation History',
  'Profile',
  'Home',
];
