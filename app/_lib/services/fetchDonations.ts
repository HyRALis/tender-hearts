export const fetchDonations = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_API}/donations`);

    if (!res) {
      throw new Error('Failed to fetch data from /api/donations');
    }

    return res.json();
  } catch (error) {
    console.error('Something went wrong /api/donations');
  }
};
