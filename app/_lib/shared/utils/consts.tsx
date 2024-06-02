import { TListItemType } from '../../types/shared';

export const COLORS = {
  PRIMARY: '#003366',
  PRIMARY_LIGHT: '#0056AC',
  PRIMARY_TWO: '#228B22',
  ACCENT: '#FF7F50',
  ACCENT_TWO: '#FFB6C1',
  NATURAL: '#FFFFFF',
  NATURAL_TWO: '#D3D3D3',
};

export const DRAWER_WIDTH = 320;

//Tabs per portal
export const donorTabs: TListItemType[] = [
  'Dashboard',
  'Browse Requests',
  'Donation History',
  'Profile',
  'Home',
];

export const adminTabs: TListItemType[] = [
  'Dashboard',
  'Manage Users',
  'Manage Requests',
  'Reports',
  'Home',
];

export const requesterTabs: TListItemType[] = [
  'Dashboard',
  'Submit Request',
  'Track Requests',
  'Donation History',
  'Profile',
  'Home',
];
