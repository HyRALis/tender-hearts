import Donation from '@/app/_lib/models/Donation';
import connectDb from '@/app/config/db';

export const GET = async (request: Request) => {
  try {
    return new Response(JSON.stringify({ message: 'You are on register' }), {
      status: 200,
    });
  } catch (e) {
    return new Response(JSON.stringify({ message: 'Hello world' }), {
      status: 500,
    });
  }
};
