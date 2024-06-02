import { TDonationTableRowData } from '../../types/shared';

export const DonationsTableRows = [
  createData({
    donorName: 'Petar Trajanoski',
    dateTime: '02.06.2024 13:07',
    donationAmount: 305,
    paymentMethod: 'credit_card',
    message: 'Thank you',
  }),
  createData({
    donorName: 'Alice Johnson',
    dateTime: '15.08.2023 09:30',
    donationAmount: 150,
    paymentMethod: 'debit_card',
    message: 'Keep up the good work!',
  }),
  createData({
    donorName: 'Bob Smith',
    dateTime: '22.11.2023 14:45',
    donationAmount: 200,
    paymentMethod: 'credit_card',
    message: 'Happy to help!',
  }),
  createData({
    donorName: 'Charlie Brown',
    dateTime: '05.01.2024 11:20',
    donationAmount: 50,
    paymentMethod: 'paypal',
    message: 'Best wishes!',
  }),
  createData({
    donorName: 'Diana Prince',
    dateTime: '12.03.2024 16:00',
    donationAmount: 500,
    paymentMethod: 'debit_card',
    message: 'Great cause!',
  }),
  createData({
    donorName: 'Edward Norton',
    dateTime: '30.06.2024 08:15',
    donationAmount: 75,
    paymentMethod: 'credit_card',
    message: 'Glad to contribute!',
  }),
  createData({
    donorName: 'Fiona Gallagher',
    dateTime: '18.09.2023 19:50',
    donationAmount: 120,
    paymentMethod: 'debit_card',
    message: 'Hope this helps!',
  }),
  createData({
    donorName: 'George Clooney',
    dateTime: '25.12.2023 10:30',
    donationAmount: 1000,
    paymentMethod: 'paypal',
    message: 'Merry Christmas!',
  }),
  createData({
    donorName: 'Hannah Montana',
    dateTime: '01.07.2024 12:00',
    donationAmount: 250,
    paymentMethod: 'credit_card',
    message: 'You are doing amazing!',
  }),
  createData({
    donorName: 'Ian Somerhalder',
    dateTime: '14.02.2024 17:45',
    donationAmount: 300,
    paymentMethod: 'debit_card',
    message: 'Happy to support!',
  }),
  createData({
    donorName: 'Jessica Alba',
    dateTime: '20.10.2023 13:30',
    donationAmount: 400,
    paymentMethod: 'debit_card',
    message: 'Keep it up!',
  }),
];

function createData(data: TDonationTableRowData): TDonationTableRowData {
  return { ...data };
}
