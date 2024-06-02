import React, { useTransition } from 'react';
import { TDonationTableHeadCellProps } from '../../types/shared';
import { useTranslations } from 'next-intl';

export const useGenerateTableHeads = () => {
  const t = useTranslations('Shared');

  const headCells: readonly TDonationTableHeadCellProps[] = [
    {
      id: 'donorName',
      align: 'left',
      disablePadding: true,
      label: t('donor_name'),
    },
    {
      id: 'dateTime',
      align: 'right',
      disablePadding: false,
      label: t('date_time'),
    },
    {
      id: 'paymentMethod',
      align: 'right',
      disablePadding: false,
      label: t('payment_method'),
    },
    {
      id: 'donationAmount',
      align: 'right',
      disablePadding: false,
      label: t('donation_amount'),
    },
    {
      id: 'message',
      align: 'right',
      disablePadding: false,
      label: t('message'),
    },
  ];

  return headCells;
};
