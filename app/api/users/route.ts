import User from '@/app/_lib/models/User';
import connectDb from '@/app/config/db';

export const GET = async (request: Request) => {
  try {
    await connectDb();

    const users = await User.find({});

    return new Response(JSON.stringify(users), {
      status: 200,
    });
  } catch (e) {
    return new Response(JSON.stringify({ message: e }), {
      status: 500,
    });
  }
};
