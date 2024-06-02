import React, { useTransition } from 'react';
import { TDonationTableHeadCellProps } from '../../types/shared';
import { useTranslations } from 'next-intl';

export const useGenerateTableHeads = () => {
  const t = useTranslations('Shared');

  const headCells: readonly TDonationTableHeadCellProps[] = [
    {
      id: 'donorName',
      numeric: false,
      disablePadding: true,
      label: t('donor_name'),
    },
    {
      id: 'dateTime',
      numeric: false,
      disablePadding: false,
      label: t('date_time'),
    },
    {
      id: 'paymentMethod',
      numeric: false,
      disablePadding: false,
      label: t('payment_method'),
    },
    {
      id: 'donationAmount',
      numeric: true,
      disablePadding: false,
      label: t('donation_amount'),
    },
    {
      id: 'message',
      numeric: false,
      disablePadding: false,
      label: t('message'),
    },
  ];

  return headCells;
};
