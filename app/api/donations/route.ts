import Donation from '@/app/_lib/models/Donation';
import connectDb from '@/app/config/db';

export const GET = async (request: Request) => {
  try {
    await connectDb();

    const donations = await Donation.find({});

    return new Response(JSON.stringify(donations), {
      status: 200,
    });
  } catch (e) {
    return new Response(JSON.stringify({ message: 'Hello world' }), {
      status: 500,
    });
  }
};
