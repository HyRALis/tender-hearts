import { error } from 'console';

export const fetchDonations = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN_API}/donations/${id}`
    );

    if (!res) {
      throw new Error('Failed to fetch data from /api/donations/id');
    }

    return res.json();
  } catch (error) {
    console.error('Something went wrong /api/donations/id');
  }
};
