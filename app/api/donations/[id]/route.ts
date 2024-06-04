import Donation from '@/app/_lib/models/Donation';
import connectDb from '@/app/config/db';

export const GET = async (
  request: Request,
  { params: { id } }: { params: { id: string } }
) => {
  try {
    await connectDb();

    const donation = await Donation.findById(id);

    if (!donation) {
      return new Response(JSON.stringify({ message: 'No donations found' }), {
        status: 200,
      });
    }

    return new Response(JSON.stringify(donation), {
      status: 200,
    });
  } catch (e) {
    return new Response(JSON.stringify({ message: 'Hello world' }), {
      status: 500,
    });
  }
};
