import { IDonation } from '@/app/_lib/models/Donation';
import { TDonationTableRowData } from '@/app/_lib/types/shared';

export const donationToTableRowAdapter = (
  donation: IDonation
): TDonationTableRowData => {
  return {
    donorName: donation.donorName,
    dateTime: donation.donationDate,
    paymentMethod: donation.paymentMethod,
    donationAmount: donation.amount,
    message: donation.reviews.length > 0 ? donation.reviews[0].positive : '',
  };
};
