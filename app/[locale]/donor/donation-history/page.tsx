import { IDonation } from '@/app/_lib/models/Donation';
import { fetchDonations } from '@/app/_lib/services/fetchDonations';
import { DonationHistoryTable } from '@/app/_lib/shared/components/donation-history/DonationHistoryTable';
import { donationToTableRowAdapter } from '@/app/_lib/shared/utils/functions/adapters/donationToTableRowAdapter';
import React from 'react';

const DonationHistory = async () => {
  const donations: IDonation[] = await fetchDonations();

  const tableRows =
    donations && donations.length
      ? donations.map((donation) => donationToTableRowAdapter(donation))
      : [];

  return <DonationHistoryTable tableRows={tableRows} />;
};

export default DonationHistory;
